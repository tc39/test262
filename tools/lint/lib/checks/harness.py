import yaml

from ..check import Check

class CheckHarness(Check):
    '''Ensure tests don't misuse harness APIs.'''
    ID = 'HARNESS'

    def run(self, name, meta, source):
        if 'verifyConfigurable(' in source and 'verifyProperty(' in source:
            return 'verifyConfigurable & verifyProperty may not be used in the same file'

        if '$ERROR' in source or '$ERROR(' in source:
            return '$ERROR() is deprecated, do not use in new or edited tests. https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#test-environment'

        return
