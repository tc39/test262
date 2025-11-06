#!/usr/bin/env python3
# Copyright (C) 2025 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import argparse
import json
import sys

def main(base_filename, new_filename):
    with open(base_filename, 'r') as base_handle:
        base = json.loads(base_handle.read())

    assert base['version'] == 1, 'Unsupported base manifest version'

    with open(new_filename, 'r') as new_handle:
        new = json.loads(new_handle.read())

    assert new['version'] == 1, 'Unsupported new manifest version'

    errors = []
    for name, tests in base['data'].items():
        assert name in new['data']

        base_count = len(tests)
        new_count = len(new['data'][name])

        if base_count > new_count:
            errors.append(
                f'Web feature "{name}" appears to have regressed ' \
                f'(from {base_count} matching tests to {new_count} matching ' \
                f'tests). Ensure the classifiers in WEB_FEATURES.yml have ' \
                f'been updated to accommodate the changes on this branch.'
            )

    return errors

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Test262 web-features manifest regression checker'
    )

    parser.add_argument('--base', help='''A web-features manifest to use as the
        basis for validation''')
    parser.add_argument('--new', help='''A web-features manifest to check
        for regressions''')

    args = parser.parse_args()
    errors = main(args.base, args.new)

    if len(errors) == 0:
        sys.exit(0)
    else:
        for error in errors:
            print(error, file=sys.stderr)
        sys.exit(1)
