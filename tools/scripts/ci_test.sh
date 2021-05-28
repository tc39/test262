#!/bin/bash

if [ "$CIRCLE_PULL_REQUEST" != "" ]; then
  paths=$(git diff --diff-filter ACMR --name-only origin/main.. -- test/)

  if [ "$paths" == "" ]; then
    echo No test files added or modified. Exiting.
    exit 0
  fi

  echo New or modified test files:
  echo "$paths"
  echo ""

  echo "Running the tests with test262-harness"
  test262-harness -t 1 --hostType=$hostType --hostPath=$hostPath --hostArgs="$hostArgs" -- $paths
fi
