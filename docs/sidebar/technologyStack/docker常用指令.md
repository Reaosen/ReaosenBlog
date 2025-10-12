# 🐳 Docker 常用命令速查表
&gt; 持续更新，建议 `star` 或 `收藏`。  
&gt; 基于 **Docker CE 24.x**，适用于所有主流 Linux/Windows/macOS 客户端。

---

## 1. 生命周期一条龙

| 阶段   | 命令                        | 示例                                                  |
| ------ | --------------------------- | ----------------------------------------------------- |
| 拉镜像 | `docker pull`               | `docker pull nginx:1.25-alpine`                       |
| 起容器 | `docker run`                | `docker run -d --name web -p 80:80 nginx:1.25-alpine` |
| 看容器 | `docker ps`                 | `docker ps -a`                                        |
| 停/起  | `docker stop/start/restart` | `docker stop web`                                     |
| 删容器 | `docker rm`                 | `docker rm -f web`                                    |
| 删镜像 | `docker rmi`                | `docker rmi nginx:1.25-alpine`                        |

---

## 2. 镜像管理

| 命令                 | 常用选项                  | 示例                                                                 |
| -------------------- | ------------------------- | -------------------------------------------------------------------- |
| `docker images`      | `-q` 只显 ID              | `docker images --format "table {{.Repository}}:{{.Tag}}\t{{.Size}}"` |
| `docker build`       | `-t` 打标签；`--no-cache` | `docker build -t demo:1.0 .`                                         |
| `docker tag`         | -                         | `docker tag demo:1.0 reg.example.com/demo:1.0`                       |
| `docker push`        | -                         | `docker push reg.example.com/demo:1.0`                               |
| `docker pull`        | -                         | `docker pull reg.example.com/demo:1.0`                               |
| `docker save`        | `-o`                      | `docker save demo:1.0                                                | gzip &gt; demo.tgz` |
| `docker load`        | `-i`                      | `gunzip -c demo.tgz                                                  | docker load`        |
| `docker image prune` | `-a -f`                   | 清理 dangling/无用镜像                                               |

---

## 3. 容器日常操作

| 场景       | 命令            | 示例                                    |
| ---------- | --------------- | --------------------------------------- |
| 交互进入   | `docker exec`   | `docker exec -it web bash`              |
| 看日志     | `docker logs`   | `docker logs -f --tail 200 web`         |
| 实时资源   | `docker stats`  | `docker stats --no-stream`              |
| 复制文件   | `docker cp`     | `docker cp web:/etc/nginx/nginx.conf .` |
| 导出容器   | `docker export` | `docker export web &gt; web.tar`        |
| 导入为镜像 | `docker import` | `cat web.tar                            | docker import - webimg:latest` |

---

## 4. 端口/卷/环境变量

```bash
# 一次性写法模板
docker run -d \
  --name mysql \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v mysql-data:/var/lib/mysql \
  -v $PWD/conf.d:/etc/mysql/conf.d:ro \
  --restart=unless-stopped \
  mysql:8.0
  ```
  | 参数                  | 说明                                        |
  | --------------------- | ------------------------------------------- |
  | `-p 宿主机:容器`      | 端口映射；可多次                            |
  | `-v 宿主机:容器[:ro]` | 绑定挂载；`ro` 只读                         |
  | `--mount`             | 更 verbose 的卷语法，推荐生产               |
  | `-e KEY=VAL`          | 环境变量；可文件 `--env-file .env`          |
  | `--restart`           | `no`/`on-failure`/`always`/`unless-stopped` |

  ## 5. 卷 & 网络

| 任务       | 命令                                | 示例                                                           |
| ---------- | ----------------------------------- | -------------------------------------------------------------- |
| 创建卷     | `docker volume create`              | `docker volume create pgdata`                                  |
| 列出卷     | `docker volume ls`                  | -                                                              |
| 清理无用卷 | `docker volume prune`               | -                                                              |
| 创建网络   | `docker network create`             | `docker network create frontend`                               |
| 查看网络   | `docker network ls`                 | -                                                              |
| 连接容器   | `--network`                         | `docker run -d --name redis --network frontend redis:7-alpine` |
| 断开/连接  | `docker network disconnect/connect` | 热调整网络                                                     |

 ## 6. Docker Compose（精简）
| 命令                           | 说明                |
| ------------------------------ | ------------------- |
| `docker compose up -d`         | 后台启动所有服务    |
| `docker compose down`          | 停止并移除容器/网络 |
| `docker compose logs -f`       | 聚合日志            |
| `docker compose exec web bash` | 进入服务容器        |
| `docker compose build`         | 重新构建镜像        |
| `docker compose pull`          | 更新基础镜像        |
| `docker compose restart`       | 重启服务            |

## 7. 调试

| 场景              | 命令                                                                |
| ----------------- | ------------------------------------------------------------------- |
| 容器无法启动      | `docker logs <id>` 先看；再加 `--entrypoint sh` 覆盖调试            |
| 网络不通          | `docker network inspect <net>` 看 IPAM；`docker exec` 进容器 `ping` |
| 镜像多大          | `docker history --no-trunc <img>` 逐层尺寸                          |
| 进入无 shell 镜像 | `docker run --rm -it --entrypoint sh myimg`                         |
| 查看实时事件      | `docker events`                                                     |



