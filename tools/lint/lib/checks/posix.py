from ..check import Check
import re

class CheckPosix(Check):
    '''Ensure tests are valid POSIX files'''
    ID = 'POSIX'

    def run(self, name, meta, source):
        if not source.endswith('\n'):
            return 'File must end with a newline'
