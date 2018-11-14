#!/bin/bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
  paths=$(git diff --diff-filter ACMR --name-only $TRAVIS_BRANCH -- test/)

  if [ "$paths" == "" ]; then
    echo No test files added or modified. Exiting.
    exit 0
  fi

  echo New or modified test files:
  echo "$paths"
  echo ""

  if [ "$T262ENGINE" != "node" ]; then
    echo "installing engine with jsvu"
    echo "jsvu --os=linux64 --engines=$T262ENGINE"
    jsvu --os=linux64 --engines=$T262ENGINE
    hostPath=$HOME/.jsvu/$T262ENGINE
  else
    hostPath=node
  fi

  

  echo ""
  echo "Running the tests with test262-harness"
  echo "test262-harness -t 1 --hostType=$hostType --hostPath=$hostPath --hostArgs=\"$hostArgs\" -- $paths"
  test262-harness -t 1 --hostType=$hostType --hostPath=$hostPath --hostArgs="$hostArgs" -- $paths
fi
