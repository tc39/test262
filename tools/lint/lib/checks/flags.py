from ..check import Check

class CheckFlags(Check):
    '''Ensure tests don't contain any contradicting or redundant flag combinations.'''
    ID = 'FLAGS'

    def run(self, name, meta, source):
        if meta is None or meta.get('flags') is None:
            return

        flags = meta['flags']

        onlyStrict = 'onlyStrict' in flags
        noStrict = 'noStrict' in flags
        module = 'module' in flags
        raw = 'raw' in flags
        canBlockIsFalse = 'CanBlockIsFalse' in flags
        canBlockIsTrue = 'CanBlockIsTrue' in flags

        if onlyStrict and noStrict:
            return '"onlyStrict" and "noStrict" flags are mutually exclusive'

        if canBlockIsFalse and canBlockIsTrue:
            return '"CanBlockIsFalse" and "CanBlockIsTrue" flags are mutually exclusive'

        if raw and onlyStrict:
            return 'Raw tests cannot prepend a "use strict" directive'

        if raw and noStrict:
            return '"raw" flag implies no "use strict" directive should be prepended'

        if module and onlyStrict:
            return 'Module tests cannot be run in non-strict mode'

        if module and noStrict:
            return '"module" flag implies the test is run in strict mode'
