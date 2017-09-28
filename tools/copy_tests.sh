#!/usr/bin/env bash

# A little helper for copying built tests into an implementation's repo, for
# testing changes.
#
# The first parameter is the root directory which test262 tests should be copied
# into, and subsequent parameters are tests to copy.
#
# Example:
# ./tools/copy_tests.sh ~/v8/test/test262/data `git diff HEAD~1 --name-only`

function mov {
  for file in "$@"; do
      target_path="$destination/`dirname "$file"`"
      if [ -f "$file" ]; then
          echo -n "Copying '$file' to '$target_path'"
          mkdir -p "$target_path"
          cp -f "$file" "$target_path" || echo " fail !" & echo "done."
      else
          echo "Skipping '$file': file not found."
      fi
  done
}

destination=$1
shift 1
mov "$@"
