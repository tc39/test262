#!/bin/bash

if [ "$CIRCLE_PULL_REQUEST" != "" ]; then
  paths=$(git diff --diff-filter ACMR --name-only origin/main.. -- test/)

  if [ "$paths" == "" ]; then
    echo No test files added or modified. Exiting.
    exit 0
  fi

  echo New or modified test files:
  echo "$paths"

else
  paths="test/"
fi

./tools/lint/lint.py --exceptions lint.exceptions $paths
