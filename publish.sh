#!/bin/bash
clear
P_DATE=`date '+%Y-%m-%d %H:%M:%S'`
echo Publishing local copy "$P_DATE" to GitHub repository...
git add .
git commit -am "$P_DATE"
git status
git push -u origin master
clear
echo Commit done!