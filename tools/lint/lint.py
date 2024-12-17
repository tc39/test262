#!/usr/bin/env python
# Copyright (C) 2017 Mike Pennisi. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

from __future__ import print_function

import argparse
import os
try:
    from pip._internal import main as pip
    from pip._internal.req import parse_requirements, InstallRequirement
except ImportError:
    from pip import main as pip
    from pip.req import parse_requirements, InstallRequirement
import sys

try:
    __import__('yaml')
except ImportError:
    for item in parse_requirements("./tools/lint/requirements.txt", session="test262"):
        if isinstance(item, InstallRequirement):
            requirement = item.name

            if len(str(item.req.specifier)) > 0:
                requirement = "{}{}".format(requirement, item.req.specifier)

            # print(requirement)
            pip(['install', requirement])


from lib.collect_files import collect_files
from lib.checks.esid import CheckEsid
from lib.checks.features import CheckFeatures
from lib.checks.frontmatter import CheckFrontmatter
from lib.checks.harnessfeatures import CheckHarnessFeatures
from lib.checks.harness import CheckHarness
from lib.checks.includes import CheckIncludes
from lib.checks.license import CheckLicense
from lib.checks.negative import CheckNegative
from lib.checks.filename import CheckFileName
from lib.checks.nopadding import CheckNoPadding
from lib.checks.flags import CheckFlags
from lib.checks.posix import CheckPosix
from lib.checks.parsetestrecord import CheckParseTestRecord
from lib.eprint import eprint
import lib.frontmatter
import lib.exceptions

parser = argparse.ArgumentParser(description='Test262 linting tool')
parser.add_argument('--exceptions',
        type=argparse.FileType('r'),
        help='file containing expected linting errors')
parser.add_argument('path',
        nargs='+',
        help='file name or directory of files to lint')
parser.add_argument('--features',
        help='File containing all known features usable in tests',
        default='features.txt')

def checks(features):
    return [
        CheckEsid(),
        CheckFileName(),
        CheckFrontmatter(),
        CheckFeatures(features),
        CheckHarnessFeatures(),
        CheckHarness(),
        CheckIncludes(),
        CheckLicense(),
        CheckNegative(),
        CheckNoPadding(),
        CheckFlags(),
        CheckPosix(),
        CheckParseTestRecord(),
    ]

def lint(file_names, features):
    errors = dict()

    for file_name in file_names:
        if not file_name.endswith((".js", ".json")):
            continue

        with open(file_name, 'r') as f:
            content = f.read()
        meta = lib.frontmatter.parse(content)
        for check in checks(features):
            error = check.run(file_name, meta, content)

            if error is not None:
                if file_name not in errors:
                    errors[file_name] = dict()
                errors[file_name][check.ID] = error

    return errors

if __name__ == '__main__':
    args = parser.parse_args()
    if args.exceptions:
        exceptions = lib.exceptions.parse(args.exceptions)
    else:
        try:
            with open('lint.exceptions', 'r') as default_exceptions:
                exceptions = lib.exceptions.parse(default_exceptions)
        except FileNotFoundError:
            exceptions = dict()

    files = [path for _path in args.path for path in collect_files(_path)]
    file_count = len(files)
    print('Linting %s file(s)' % (file_count))

    all_errors = lint(files, args.features)
    unexpected_errors = dict(all_errors)

    for file_name, failures in all_errors.items():
        if file_name not in exceptions:
            continue
        if set(failures.keys()) == exceptions[file_name]:
            del unexpected_errors[file_name]

    error_count = len(unexpected_errors)
    print('Linting complete. %s error(s) found.' % (error_count))

    if error_count == 0:
        sys.exit(0)

    for file_name, failures in iter(sorted(unexpected_errors.items())):
        for ID, message in failures.items():
            eprint('%s: %s - %s' % (os.path.abspath(file_name), ID, message))

    sys.exit(1)
