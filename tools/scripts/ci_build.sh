#!/bin/sh
if [ "$CIRCLE_PULL_REQUEST" != "" ]; then
  ./make.py clean > /dev/null
fi
./make.py

if [ -n "$(git status --porcelain)" -a "$CIRCLE_PULL_REQUEST" != "" ]; then
  echo New changes were found after re-generating the tests.
  echo ""
  git status --porcelain;
  echo ""
  git diff;
  echo ""
  echo Please, read the documentation on procedurally generated tests
  echo 'https://github.com/tc39/test262/blob/HEAD/CONTRIBUTING.md#procedurally-generated-tests'
  exit 1
fi
