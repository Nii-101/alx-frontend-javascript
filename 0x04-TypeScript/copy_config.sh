
#!i/usr/bin/env bash

# Loop through the task directories
for i in {1..5}
do
  # Copy each configuration file to the current task directory
  cp task_0/package.json "task_$i/"
  cp task_0/.eslintrc.js "task_$i/"
  cp task_0/tsconfig.json "task_$i/"
  cp task_0/webpack.config.js "task_$i/"
done

echo "Files copied to all task directories."

