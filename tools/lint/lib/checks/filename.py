import re

from ..check import Check

_DISALLOWED_PATTERN = re.compile('[^a-zA-Z0-9/\\-_.]')

class CheckFileName(Check):
    '''Ensure tests have a valid name.'''
    ID = 'FILENAME'

    def run(self, name, meta, source):
        if _DISALLOWED_PATTERN.search(name):
            return "Contains non-alphanumeric or `-`, `_`, '.' characters."
