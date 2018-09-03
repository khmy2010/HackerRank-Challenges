#!/bin/bash
clear
P_DATE=`date '+%Y-%m-%d %H:%M:%S'`
echo Publishing local copy "$P_DATE" to GitHub repository...
git add .
git commit -am "$P_DATE"
git push -u origin master
echo Commit done!