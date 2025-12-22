# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import os, re

from .util.find_comments import find_comments
from .util.parse_yaml import parse_yaml

def after_parse(fn):
    def wrapper(self, *args, **kwargs):
        if self.source is None and self.dynamic_source is not None:
            self.source = self.dynamic_source()
            self._parse()
        return fn(self, *args, **kwargs)
    return wrapper

class Test:
    """Representation of a generated test. Specifies a file location which may
    or may not exist."""
    def __init__(self, file_name, dynamic_source=None, source_file_names=None):
        self.file_name = file_name
        self.dynamic_source = dynamic_source
        self.source_file_names = source_file_names
        self.source = None
        self.attribs = dict(meta=None)

    def load(self):
        with open(self.file_name, 'r') as handle:
            self.source = handle.read()
        self._parse()

    def _parse(self):
        for comment in find_comments(self.source):
            meta = parse_yaml(comment['source'])
            if meta:
                self.attribs['meta'] = meta
                break

    @after_parse
    def is_generated(self):
        if not self.attribs['meta']:
            return False
        flags = self.attribs['meta'].get('flags')

        if not flags:
            return False

        return 'generated' in flags

    @after_parse
    def to_string(self):
        return '\n'.join([
            '/**',
            ' * ----------------------------------------------------------------',
            ' * ' + self.file_name,
            ' * ----------------------------------------------------------------',
            ' */',
            self.source.decode('utf-8'),
            '\n'])

    @after_parse
    def write(self, prefix, parents=False):
        location = os.path.join(prefix, self.file_name)
        path = os.path.dirname(location)
        if not os.path.exists(path):
            if parents:
                os.makedirs(path)
            else:
                raise Exception('Directory does not exist: ' + path)

        with open(location, 'wb') as handle:
            handle.write(self.source)
