# **Simple Linux webhook listener**

Provides an API which accepts the script name as path param.

It runs only shell scripts.

## **Setup**

This is a node application. So you need to have **node** installed.

1. Clone this repository
2. Run **npm i**
3. node **bin/www** or If you are using pm2, you can run **pm2 bin/www**

## **Configuration**

**WH_LISTENER_SCRIPTS_PATH**: Base location of the scripts. Set this value to the base location of the scripts. Else the default value would be **/home/\$USER/wh_scripts/**
