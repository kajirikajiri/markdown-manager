#!/bin/sh

# IFS='
# '

# xstat() {
#   for target in "${@}"; do
#     inode=$(ls -di "${target}" | cut -d ' ' -f 1)
#     fs=$(df "${target}"  | tail -1 | awk '{print $1}')
#     crtime=$(sudo debugfs -R 'stat <'"${inode}"'>' "${fs}" 2>/dev/null | 
#     grep -oP 'crtime.*--\s*\K.*')
#     printf "%s\n" "${crtime}"
#   done
# }

# rm -rf markdowns.js

# echo "export const markdowns = [" >> markdowns.js
# files=$(ls -A1t ./src/assets/md)
# for file in $files; do
#   Modify=$(stat ./src/assets/md/${file}|grep Modify:)
#   SededModify=$(echo $Modify|sed -e 's/Modify: //g')
#   FormatedModify=$(date -d "${SededModify}" '+%Y/%m/%d %H:%M:%S')

#   Birth=$(xstat ./src/assets/md/${file})
#   FormatedBirth=$(date -d "${Birth}" '+%Y/%m/%d %H:%M:%S')
#   echo "  {name: '${file##*/}', birth: '${FormatedBirth}', modify: '${FormatedModify}'}," >> markdowns.js
# done
# echo "]" >> markdowns.js

# git add ./markdowns.js
# echo 'ok markdown listed !!'
