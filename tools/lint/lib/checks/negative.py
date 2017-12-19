import re
from ..check import Check

_THROW_STMT = re.compile(
      r'^throw "Test262: This statement should not be evaluated\.";$',
      re.MULTILINE)

class CheckNegative(Check):
    '''Ensure tests have the expected YAML-formatted metadata.'''
    ID = 'NEGATIVE'

    def run(self, name, meta, source):
        if meta is None or meta.get('negative') is None:
            return

        negative = meta['negative']
        if not isinstance(negative, dict):
            return '"negative" must be a dictionary with fields "type" and "phase"'

        if not 'type' in negative:
            return '"negative" must specify a "type" field'

        if not 'phase' in negative:
            return '"negative" must specify a "phase" field'

        if negative["phase"] in ["parse", "resolution"] and not _THROW_STMT.search(source):
            return 'Negative tests of type "early" must include a `throw` statement'
