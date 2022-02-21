import re
import yaml
from ..check import Check

_THROW_STMT = re.compile(
      r'^\$DONOTEVALUATE\(\);$',
      re.MULTILINE)

_THROW_STMT_RAW = re.compile(
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

        if len(negative.keys()) > 2:
            return '"negative" must specify only "type" and "phase" fields'

        if negative["phase"] not in ["parse", "resolution", "runtime"]:
            return '"phase" must be one of ["parse", "resolution", "runtime"]'

        if negative["phase"] in ["parse", "resolution"]:
            if meta.get('flags') and 'raw' in meta['flags']:
                if not _THROW_STMT_RAW.search(source):
                    return 'Negative tests of type "early" must include a `throw` statement'
            elif not _THROW_STMT.search(source):
                return 'Negative tests of type "early" must include a $DONOTEVALUATE() call'

        for event in meta.parsing_events:
            if isinstance(event, yaml.ScalarEvent):
                if event.value == 'type':
                    line_type = event.start_mark.line
                elif event.value == 'phase':
                    line_phase = event.start_mark.line

        if line_phase > line_type:
            return '"phase" field must precede "type" field'
