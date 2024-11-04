#!/bin/bash

if [ "$#" -eq 0 ]; then
  set -- test/
fi

./tools/lint/lint.py --exceptions lint.exceptions $@
