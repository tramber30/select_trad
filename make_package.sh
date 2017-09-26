#!/bin/bash
PACKAGE_OUT=./package
PACKAGE_NAME=select_trad

if [ ! -d $PACKAGE_OUT ]; then
        mkdir -p $PACKAGE_OUT
else
        if [ -e $PACKAGE_OUT/$PACKAGE_NAME ]; then
                rm $PACKAGE_OUT/$PACKAGE_NAME
        fi
fi

find . -maxdepth 1 -type f | zip $PACKAGE_OUT/$PACKAGE_NAME -@

