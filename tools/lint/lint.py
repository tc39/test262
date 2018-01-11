#!/usr/bin/env python
# Copyright (C) 2017 Mike Pennisi. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import argparse
import inflect
import os
import pip
import pip.req
import sys

ie = inflect.engine()

try:
    __import__('yaml')
except ImportError:
    for item in pip.req.parse_requirements("./tools/lint/requirements.txt", session="test262"):
        if isinstance(item, pip.req.InstallRequirement):
            requirement = item.name

            if len(str(item.req.specifier)) > 0:
                requirement = "{}{}".format(requirement, item.req.specifier)

            # print(requirement)
            pip.main(['install', requirement])


from lib.collect_files import collect_files
from lib.checks.esid import CheckEsid
from lib.checks.features import CheckFeatures
from lib.checks.frontmatter import CheckFrontmatter
from lib.checks.harnessfeatures import CheckHarnessFeatures
from lib.checks.license import CheckLicense
from lib.checks.negative import CheckNegative
from lib.eprint import eprint
import lib.frontmatter
import lib.whitelist

parser = argparse.ArgumentParser(description='Test262 linting tool')
parser.add_argument('--whitelist',
        type=argparse.FileType('r'),
        help='file containing expected linting errors')
parser.add_argument('path',
        nargs='+',
        help='file name or directory of files to lint')

checks = [
    CheckEsid(),
    CheckFrontmatter(),
    CheckFeatures('features.txt'),
    CheckHarnessFeatures(),
    CheckLicense(),
    CheckNegative()
]

def lint(file_names):
    errors = dict()

    for file_name in file_names:
        with open(file_name, 'r') as f:
            content = f.read()
        meta = lib.frontmatter.parse(content)
        for check in checks:
            error = check.run(file_name, meta, content)

            if error is not None:
                if file_name not in errors:
                    errors[file_name] = dict()
                errors[file_name][check.ID] = error

    return errors

if __name__ == '__main__':
    args = parser.parse_args()
    if args.whitelist:
        whitelist = lib.whitelist.parse(args.whitelist)
    else:
        whitelist = dict()

    files = [path for _path in args.path for path in collect_files(_path)]
    file_count = len(files)
    print 'Linting %s %s' % (file_count, ie.plural('file', file_count))

    all_errors = lint(files)
    unexpected_errors = dict(all_errors)

    for file_name, failures in all_errors.iteritems():
        if file_name not in whitelist:
            continue
        if set(failures.keys()) == whitelist[file_name]:
            del unexpected_errors[file_name]

    error_count = len(unexpected_errors)
    print 'Linting complete. %s %s found.' % (error_count, ie.plural('error', error_count))

    if error_count == 0:
        sys.exit(0)

    for file_name, failures in iter(sorted(unexpected_errors.iteritems())):
        for ID, message in failures.iteritems():
            eprint('%s: %s - %s' % (os.path.abspath(file_name), ID, message))

    sys.exit(1)
