#!/usr/bin/env bash

# A little helper for copying built tests into an implementation's repo, for
# testing changes.
#
# The destination directory is specified with `-d`, `--dest` or `--destination`.
# Source files can be positional (in which case, they are ignored if not found
# to be relative to the test directory), or specified via utilities such as
# `--head` (tests changed in the current working directory), or `--since N`
# (tests changed in the last N commits).

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
root_dir="$( dirname "$script_dir" )"
tests_dir="$root_dir/test"

help_msg="$(cat <<-END

Help:

    -d <argument>             | -d=<argument>
    --dest <argument>         | --dest=<argument>
    --destination <argument>  | --destination=<argument>

        Specify a destination directory to receive copied tests. If not present,
        the script runs in dry-run mode and does not copy files.

    -n
    --dryrun
    --dry-run

        Don't copy files, but print the operations which would be performed.
        Useful for debugging.

    --head

        Copy test files which have changed in the working directory since the
        last commit. Performs \`git diff HEAD --name-only\`.

    -s <argument>             | -s=<argument>
    --diff <argument>         | --diff=<argument>
    --since <argument>        | --since=<argument>

        Copy files which have changed in the past N commits. Also includes
        changes in the current working directory since the last commit. Performs
        \`git diff HEAD~\<argument> --name-only\`.

    -h
    --help

        Print this help message.

END
)"

check_path() {
    local file="$1"
    if ( [ ! -f "$file" ] ); then
        return
    fi

    local path=$(echo "$( realpath --relative-to="$root_dir/test" "$file" )" | tr "/" " ")
    for part in $path; do
        if [ "$part" = ".." ]; then
            return
        fi
    done

    echo "$file"
}

files=( )
dry_run=0
while [[ $# -gt 0 ]]; do
    case "$1" in
        -d|--dest|--destination)
            # Select the destination to copy into (value is following
            # positional parameter)
            destination="$2"
            shift
            shift
            ;;
        -d=*|--dest=*|--destination=*)
            # Select the destination to copy into (value follows `=` sign)
            destination="${i#*=}"
            shift
            ;;
        -n|--dryrun|--dry-run)
            # Don't actually copy files, but instead list the files to copy
            dry_run=1
            shift
            ;;
        --head)
            # Add test files changed since the last commit
            files+=( "$( git diff HEAD --name-only --diff-filter=d | grep "^test/" )" )
            shift
            ;;
        -s|--diff|--since)
            # Add test files changed in the last N commits (N is following
            # positional parameter)
            files+=( "$( git diff HEAD~$2 --name-only --diff-filter=d | grep "^test/" )" )
            shift
            shift
            ;;
        -s=*|--diff=*|--since=*)
            # Add test files changed in the last N commits (N follows `=` sign)
            files+=( "$( git diff HEAD~${i#*=} --name-only --diff-filter=d | grep "^test/" )" )
            shift
            ;;
        -h|--help)
            echo -n "$help_msg"
            exit 0
            ;;
        *)
            # Add a specific test, if it's a file relative to $tests_dir
            if [ -n "$( check_path "$1" )" ]; then
              files+=( "$1" )
            fi
            shift
            ;;
    esac
done

if [ ${#destination} -eq 0 ]; then
  echo -n "Error: No destination specified."
  echo -n "$help_msg"
  exit 1
fi

function main {
    for file in $files; do
        # Convert absolute path to relative path
        file="$( realpath --relative-to="$root_dir" "$file" )"
        target_path="$destination/$( dirname "$file" )"
        cmd=$( cat <<-END
mkdir -p "$target_path"
cp -f "$file" "$target_path"

END
)
        if [ $dry_run -eq 0 ]; then
          eval "$cmd"
        else
          echo "$cmd"
          echo ""
        fi
    done
}

old_dir=$( pwd )
cd "$root_dir"
main
cd "$old_dir"
