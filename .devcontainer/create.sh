#!/bin/bash
cd /tmp
git clone https://github.com/awslabs/git-secrets
cd git-secrets
sudo make install
npm install -g firebase-tools

sudo mkdir /opt/java
cd /opt/java/
sudo wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.tar.gz
sudo tar zxvf jdk-21_linux-x64_bin.tar.gz

echo 'export JAVA_HOME=/opt/java/jdk-21.0.5' >> ~/.bashrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.bashrc
echo 'export CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib' >> ~/.bashrc
