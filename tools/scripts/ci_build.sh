#!/bin/sh
./make.py clean > /dev/null
./make.py
if [ -n "$(git status --porcelain)" ]; then
  echo New changes were found after re-generating the tests.
  echo Please, read the documentation on procedurally generated tests
  echo 'https://github.com/tc39/test262/blob/HEAD/CONTRIBUTING.md#procedurally-generated-tests'
  exit 1
fi
