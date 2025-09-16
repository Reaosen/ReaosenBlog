# 如何提升代码健壮性

> 工作近三个月，明显感受到自己写的代码臃肿、适配性差。尽管有公司项目旧、无规范的原因，但是自身的代码也有很大问题。所以问了ai如何提升代码健壮性。以下。

## 早返回（Guard Clause）

- 问题代码：代码不要层层嵌套，往往读到底才能了解代码目的。
  
  ```java
  public User createUser(CreateUserDto dto) {
      if (dto != null) {
          if (dto.getName() != null && !dto.getName().isBlank()) {
              if (dto.getAge() != null && dto.getAge() >= 18) {
                  User user = new User();
                  user.setName(dto.getName().trim());
                  user.setAge(dto.getAge());
                  return userRepository.save(user);
              } else {
                  throw new IllegalArgumentException("年龄必须≥18");
              }
          } else {
              throw new IllegalArgumentException("姓名不能为空");
          }
      } else {
          throw new IllegalArgumentException("dto 不能为空");
      }
  }
  ```

- 重构后：非法场景提前 return，主干逻辑顶格。
  
  ```java
  public User createUser(CreateUserDto dto) {
  if (dto == null) throw new IllegalArgumentException("dto 不能为空");
  if (dto.getName() == null || dto.getName().isBlank())
      throw new IllegalArgumentException("姓名不能为空");
  if (dto.getAge() == null || dto.getAge() < 18)
      throw new IllegalArgumentException("年龄必须≥18");
  
  User user = new User();
  user.setName(dto.getName().trim());
  user.setAge(dto.getAge());
  return userRepository.save(user);
  }
  ```

- 单测（JUnit 5 + assertThrows）：
  
  ```java
  @Test
  void shouldRejectNullDto() {
  assertThrows(IllegalArgumentException.class,
              () -> service.createUser(null),
              "dto 不能为空");
  }
  ```

## 表驱动消灭 if/else 链

- 问题代码：业务分支一多就膨胀。
  
  ```java
  // 啰嗦
  public BigDecimal discount(OrderType type, BigDecimal amount) {
      if (type == OrderType.NORMAL) return amount.multiply(new BigDecimal("0.95"));
      else if (type == OrderType.VIP) return amount.multiply(new BigDecimal("0.90"));
      else if (type == OrderType.SVIP) return amount.multiply(new BigDecimal("0.85"));
      else throw new IllegalArgumentException("未知类型");
  }
  ```

- 重构后：Enum 自带行为，O(1) 查表，后续加类型只改枚举。
  
  ```java
  enum OrderType {
      NORMAL(BigDecimal.valueOf(0.95)),
      VIP(BigDecimal.valueOf(0.90)),
      SVIP(BigDecimal.valueOf(0.85));
  
      private final BigDecimal rate;
      OrderType(BigDecimal rate) { this.rate = rate; }
      public BigDecimal apply(BigDecimal amount) { return amount.multiply(rate); }
  }
  
  public BigDecimal discount(OrderType type, BigDecimal amount) {
      Objects.requireNonNull(type, "type 不能为空");
      return type.apply(amount);
  }
  ```

## 重复校验逻辑集中化

- 问题代码：每个接口都手写非空、长度、范围判断。
  
  ```java
  // 啰嗦，到处复制
  if (name == null || name.length() < 2 || name.length() > 20)
      throw new IllegalArgumentException("姓名长度 2-20");
  ```

- 重构后：封装校验器 + 自定义异常，统一错误码。
  
  ```java
  public final class Validator {
      private Validator() {}
      public static String validName(String name) {
          if (name == null || name.length() < 2 || name.length() > 20)
              throw new BizException(400, "NAME_INVALID", "姓名长度 2-20");
          return name;
      }
  }
  
  // 使用
  user.setName(Validator.validName(dto.getName()));
  ```

## 异常体系混乱

- 问题代码：直接抛出异常，无法判断异常来自用户还是服务器。

- 重构后：定义两类异常 + `@ControllerAdvice` 统一转 JSON。
  
  ```java
  // 业务异常，前端 4xx
  public class BizException extends RuntimeException {
      private final int code;
      public BizException(int code, String message) { super(message); this.code = code; }
      public int getCode() { return code; }
  }
  
  // 系统异常，前端 5xx
  public class SysException extends RuntimeException {
      public SysException(String message, Throwable cause) { super(message, cause); }
  }
  
  @RestControllerAdvice
  public class GlobalAdvice {
      @ResponseStatus(HttpStatus.BAD_REQUEST)
      @ExceptionHandler(BizException.class)
      public Map<String, Object> handleBiz(BizException e) {
          return Map.of("code", e.getCode(), "msg", e.getMessage());
      }
  
      @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
      @ExceptionHandler(SysException.class)
      public Map<String, Object> handleSys(SysException e) {
          return Map.of("code", 500, "msg", "系统繁忙，请稍后重试");
      }
  }
  ```

## 魔法值硬编码 → 枚举 + 常量

- 问题代码：直接使用String硬编码
  
  ```java
  if ("PAY_SUCCESS".equals(status)) { ... }
  ```

- 重构后：使用枚举+常量
  
  ```java
  enum PayStatus { SUCCESS, FAIL, CLOSED }
  if (PayStatus.SUCCESS == status) { ... }
  ```

## 过度 try-catch → 利用 Optional + 自定义异常

- 问题代码：到处捕获 NPE，代码臃肿。
  
  ```java
  try {
      return order.getItem().getProduct().getPrice();
  } catch (NullPointerException e) {
      return BigDecimal.ZERO;
  }
  ```

- 重构后：Optional 链式 + orElseThrow。
  
  ```java
  return Optional.ofNullable(order)
                 .map(Order::getItem)
                 .map(Item::getProduct)
                 .map(Product::getPrice)
                 .orElseThrow(() -> new BizException(400, "PRICE_NOT_FOUND", "价格缺失"));
  ```

## 日志无重要信息

- 重构后：使用 Slf4j + MDC，ELK 可直接索引,打印出关键的变量。
  
  ```java
  MDC.put("orderNo", order.getOrderNo());
  log.info("订单处理完成, amount={}", order.getAmount());
  MDC.clear();
  ```


