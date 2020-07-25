# **Simple Linux webhook listener**

Provides an API which accepts the script name as path param.

It runs only shell scripts.

## **Setup**

This is a node application. So you need to have **node** installed.

1. Clone this repository
2. Run **npm i**
3. Run **node bin/www** or If you are using pm2, you can run **pm2 start bin/www --name webhook-listener**

## **Configuration**

**WH_LISTENER_SCRIPTS_PATH**: Base location of the scripts. Set this value to the base location of the scripts. Else the default value would be **/var/wh_scripts/**

**WH_LISTENER_PORT**: Service port. Default value is 3000. If you want this to be run on a different port, set the value of WH_LISTENER_PORT to a different port number.
