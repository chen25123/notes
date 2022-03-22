# 在windows 安装git服务端

## 资料

  1. [搭建步骤](https://blog.csdn.net/junlinitanxi/article/details/43339445)
  1. [搭建步骤](https://www.cnblogs.com/zxtceq/p/11082525.html)
  https://blog.csdn.net/syrlyz/article/details/80717019
  https://blog.csdn.net/junlinitanxi/article/details/43339445
  [ssh]https://blog.csdn.net/bruceoxl/article/details/78476306


  1. 安装git
  2. 安装ssh
  3. 新建一个 git 用户(系统账户)
  4. 将git bin目录下的libiconv-2.dll和libexec/git-core目录下的git-receive-pack.exe git-upload-archive.exegit-upload-pack.exe放到copssh的bin目录下。
  5. 将 git 用户 添加到ssh里面

  遇到的第一个问题，登录git用户之后，git命令行失效
  
  解决办法，
  1. 按需将 git 目录的文件拷贝到ssh 的目录
  
  方案一：将$ Git\libexec\git-core目录下的git.exe , git-receive-pack.exe , git-upload-archive.exe , git-upload-pack.exe复制到$ICW\bin目录下

  将$Git\bin目录下的libiconv-2.dll复制到$ICW\bin目录下

  将$Git下的share目录整个拷贝到$ICW下。

  2. 当方案一报错的时候，就吧 git\libexec\git-core  里面的所有东西全部拷贝到 $ICW\bin 目录下
  当错误是 /usr/bin/git.exe: error while loading shared libraries: ?: cannot open shared object file: No such file...... 的时候
  