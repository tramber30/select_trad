#!/bin/bash
PACKAGE_OUT=./package
PACKAGE_NAME=select_trad
PACKAGE_EXCLUDE="$0|.gitignore"

if [ ! -d $PACKAGE_OUT ]; then
        mkdir -p $PACKAGE_OUT
else
        rm $PACKAGE_OUT/*
fi

find . -maxdepth 1 -type f | grep -vE $PACKAGE_EXCLUDE | zip $PACKAGE_OUT/$PACKAGE_NAME -@

