#!/bin/bash

a=($(git log HEAD^..HEAD --name-only --oneline --pretty=oneline ./markdown |tail -n +2))
for fileName in ${a[@]}; do
  ./node_modules/.bin/doctoc $fileName
done