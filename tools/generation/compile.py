#!/usr/bin/env python
from __future__ import print_function

import argparse
import os, sys

from expander import Expander

def print_test(test):
    print('/**')
    print(' * ----------------------------------------------------------------')
    print(' * ' + test['name'])
    print(' * ----------------------------------------------------------------')
    print(' */')
    print(test['source'])
    print('\n')

def write_test(prefix, test):
    location = os.path.join(prefix, test['name'])
    path = os.path.dirname(location)
    if not os.path.exists(path):
        os.makedirs(path)
    with open(location, 'w') as handle:
        handle.write(test['source'])

def find_cases(location):
    # When a file is specified, return the file name and its containing
    # directory
    if os.path.isfile(location):
        return location, [os.path.dirname(location)]

    # When a directory is specified, if that directory contains a sub-directory
    # names "default" interpret it as a "case directory"
    if (os.path.isdir(os.path.join(location, 'default'))):
        return None, [location]
    else:
        return None, map(
            lambda x: os.path.join(args.cases, x), os.listdir(args.cases))

parser = argparse.ArgumentParser(description="foobar")
parser.add_argument('-o', '--out', help='''The directory to write the
    compiled tests. If unspecified, tests will be written to standard out.''')
parser.add_argument('-n', '--no-clobber', help='''Do not produce test if a
    corresponding file exists within this directory.''')
parser.add_argument('cases', help='''Test cases to generate. May be a file or a
    directory.''')
args = parser.parse_args()

caseFile, caseDirs = find_cases(args.cases)

for caseDir in caseDirs:
    exp = Expander(caseDir)
    for test in exp.expand('utf-8', caseFile):
        if args.no_clobber:
            other_file = os.path.join(args.no_clobber, test['name'])
            if os.path.isfile(other_file):
                print('ERROR: Refusing to overwrite ' + other_file)
                exit(1)

        if args.out:
            write_test(args.out, test)
        else:
            print_test(test)
