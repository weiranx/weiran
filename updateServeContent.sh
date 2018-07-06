#!/bin/bash

clear
echo "fetching static content"

cd weiran-build
rm -rf serve

git clone https://github.com/weiranx/weiran-build

mv weiran-build serve

clear
echo 'finished... content under serve directory\n'

echo 'Restarting server\n'
pm2 stop app
pm2 start app
