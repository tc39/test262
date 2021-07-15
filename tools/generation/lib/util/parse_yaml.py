# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import yaml, re, textwrap

yamlPattern = re.compile(
        r'^\s*---\n(.*?)(?:\n[^\n\S]*)?---\s*$',
        flags=re.DOTALL)

def parse_yaml(string):
    match = yamlPattern.match(string)
    if not match:
        return False

    unindented = textwrap.dedent(match.group(1))

    return yaml.safe_load(unindented)
