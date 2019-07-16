#!/bin/bash
string1="ru1noob"
string2="runoob"
if test $string1 = $string2; then
    echo '两个字符串相等!'
else
    echo '两个字符串不相等!'
fi

num1=1
num2=2
result=$((num1 + num2))
echo "result 为： $result"

if test $((num1)) -eq $((num2)); then
    echo '两个数相等！'
else
    echo '两个数不相等！'
fi

if test -f ./basic.sh; then
    echo '存在'
else
    echo '不存在'
fi
