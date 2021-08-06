# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import yaml, re, textwrap

yamlPattern = re.compile(
        r'^\s*---\n(.*?)(?:\n[^\n\S]*)?---\s*$',
        flags=re.DOTALL)
endOfLine = re.compile(r'(^|.)$', flags=re.MULTILINE)

def parse_yaml(string):
    match = yamlPattern.match(string)
    if not match:
        return False

    # dedent truncates only-whitespace lines,
    # so run it against a transformed string
    # in which every line is terminated by a tilde
    terminated = endOfLine.sub(r'\1~', match.group(1))
    dedented_terminated = textwrap.dedent(terminated)
    dedented = endOfLine.sub('', dedented_terminated)

    return yaml.safe_load(dedented)
