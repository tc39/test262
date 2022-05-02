#!/usr/bin/env python
# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

from __future__ import print_function
import argparse
import glob, os, sys

from lib.expander import Expander
from lib.test import Test

# base name of the files to be ignored
ignored_files = [
    '.DS_Store',
]

def print_error(*values):
    print('ERROR:', *values, file=sys.stderr)

# When a directory contains at least one file with a `.case` extension, it
# should be interpreted as a "case directory"
def is_case_dir(location):
    for file_name in os.listdir(location):
        if file_name.lower().endswith('.case'):
            return True
    return False

def find_cases(location):
    # single file
    if os.path.isfile(location):
        return location, [os.path.dirname(location)]

    # directory with case files
    if is_case_dir(location):
        return None, [location]

    # other directory, return all contents other than hidden "dot files"
    return None, glob.glob(os.path.join(location, '*'))

def clean(args):
    for (subdir, _, fileNames) in os.walk(args.directory):
        for fileName in map(lambda x: os.path.join(subdir, x), fileNames):
            if os.path.basename(fileName) in ignored_files:
                continue
            test = Test(fileName)
            test.load()
            if test.is_generated():
                print('Deleting file "' + fileName + '"...')
                os.remove(fileName)

def create(args):
    caseFile, caseDirs = find_cases(args.cases)

    for caseDir in caseDirs:
        exp = Expander(caseDir)
        for test in exp.expand('utf-8', caseFile):
            if args.out:
                try:
                    test_file = os.path.join(args.out, test.file_name)
                    test_mtime = os.path.getmtime(test_file)

                    if args.no_clobber:
                        print_error(
                            'Refusing to overwrite file: ' + test.file_name)
                        exit(1)

                    if not args.regenerate:
                        source_files = test.source_file_names
                        if all(test_mtime > os.path.getmtime(f) for f in source_files):
                            continue

                    existing = Test(test_file)
                    existing.load()
                    if not existing.is_generated():
                        print_error(
                            'Refusing to overwrite non-generated file: ' +
                            test.file_name)
                        exit(1)
                except (OSError, IOError):
                    pass

                test.write(args.out, parents=args.parents)
            else:
                print(test.to_string())

parser = argparse.ArgumentParser(description='Test262 test generator tool')
subparsers = parser.add_subparsers()

create_parser = subparsers.add_parser('create',
    help='''Generate test material''')
create_parser.add_argument('-o', '--out', help='''The directory in which to write
    compiled tests. If unspecified, tests will be written to standard output.''')
create_parser.add_argument('-p', '--parents', action='store_true',
    help='''Create non-existent directories as necessary.''')
create_parser.add_argument('-n', '--no-clobber', action='store_true',
    help='''Abort if any test file already exists.''')
create_parser.add_argument('-r', '--regenerate', action='store_true',
    help='''Regenerate test files that are already newer than their source data.''')
create_parser.add_argument('cases',
    help='''Test cases to generate. May be a file or a directory.''')
create_parser.set_defaults(func=create)

clean_parser = subparsers.add_parser('clean',
    help='''Remove previously-generated files''')
clean_parser.add_argument('directory',
    help='''Remove any generated tests from this directory''')
clean_parser.set_defaults(func=clean)

args = parser.parse_args()
args.func(args)
