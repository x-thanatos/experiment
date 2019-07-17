#!/bin/bash

# For iteration
echo "===For iteration==="
for skill in $(ls /bin); do
    echo "I am good at ${skill}Script"
done

# Readonly variable
echo "===Readonly variable==="
uesr_id=12345
readonly uesr_id
uesr_id=1
echo ${uesr_id}

# Delete variable
echo "===Delete variable==="
user_name='哈哈'
unset user_name
echo "user_name: ${user_name}"

# String feature
echo "===String feature==="
my_string="😀"
your_string="你好！${my_string}"
echo ${your_string}
echo "length of your_string is ${#your_string}"
# output 1~3 chars of string
echo "${your_string:1:3}"

# Array feature
echo "===Array feature==="
my_array=("😀" 2 3)
echo ${my_array[@]}
