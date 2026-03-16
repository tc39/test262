import yaml

from ..check import Check

class CheckHarness(Check):
    '''Ensure tests don't misuse harness APIs.'''
    ID = 'HARNESS'

    def run(self, name, meta, source):
        if 'verifyConfigurable(' in source and 'verifyProperty(' in source:
            return 'verifyConfigurable & verifyProperty may not be used in the same file'
        elif 'verifyConfigurable(' in source and 'verifyPrimordialProperty(' in source:
            return 'verifyConfigurable & verifyPrimordialProperty may not be used in the same file'
        else:
            return
