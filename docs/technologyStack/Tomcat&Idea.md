## Tomcat服务器在Idea中乱码解决方案

1. 打开Idea中的Tomcat服务器编辑，选择启动/链接(Startup/Connection)，将传递环境变量(Pass environment variables)打勾。
2. 在下方添加环境变量:
    ``` java
    //Name Value
    JAVA_TOOL_OPTIONS   -Dfile.encoding=UTF-8
    JAVA_OPTS   -Dfile.encoding=UTF-8
    ```
3. 选择服务器(server)，在虚拟机选项(VM options)填写`-Dfile.encoding=UTF-8`

可能是因为windows的默认编码是GBK，所以idea的控制台编码默认也是GBK，所以需要设置成UTF-8

> 参考链接: [【已解决】解决Tomcat在IDEA控制台乱码问题，详细的保姆级别教程！](https://blog.csdn.net/CNpeaceful/article/details/135679808)