# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import codecs
import re

from .util.find_comments import find_comments
from .util.parse_yaml import parse_yaml

regionStartPattern = re.compile(r'-\s+(\S+)(?P<options>\s*.*)')
metaPattern = r'\/\*---\n([\s]*)((?:\s|\S)*)[\n\s*]---\*\/'

class Case:
    def __init__(self, file_name, encoding):
        self.attribs = dict(meta=None, regions=dict(), region_options=dict())

        with codecs.open(file_name, 'r', encoding) as handle:
            self.attribs = self._parse(handle.read())

    def _parse(self, source):
        case = dict(meta=None, regions=dict(), region_options=dict())
        region_name = None
        region_end = -1
        region_options = None
        lines = source.split('\n')
        search = re.search(metaPattern, source, re.DOTALL|re.MULTILINE)

        if search:
            meta = search.group()
            meta = parse_yaml(meta[2:-2])
            if meta and not case['meta']:
                case['meta'] = meta

        for comment in reversed(list(find_comments(source))):
            match = regionStartPattern.match(comment['source'])
            if match:
                region_name = match.group(1)
                case['regions'][region_name] = \
                    '\n'.join(lines[comment['lineno']:region_end])
                region_options = match.group('options').split()
                if region_options:
                    case['region_options'][region_name] = set(region_options)
                region_end = comment['lineno'] - 1

        return case
