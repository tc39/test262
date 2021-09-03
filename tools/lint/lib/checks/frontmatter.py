import yaml

from ..check import Check

_REQUIRED_FIELDS = set(['description'])
_OPTIONAL_FIELDS = set([
    'author', 'es5id', 'es6id', 'esid', 'features', 'flags', 'includes',
    'info', 'locale', 'negative', 'timeout'
])
_VALID_FIELDS = _REQUIRED_FIELDS | _OPTIONAL_FIELDS

class CheckFrontmatter(Check):
    '''Ensure tests have the expected YAML-formatted metadata.'''
    ID = 'FRONTMATTER'

    def run(self, name, meta, source):
        if '_FIXTURE' in name:
            if meta is not None:
                return '"Fixture" files cannot specify metadata'
            return

        if meta is None:
            return 'No valid YAML-formatted frontmatter'

        for parsing_event in meta.parsing_events:
            if not isinstance(parsing_event, yaml.ScalarEvent):
                continue
            if parsing_event.style is not None:
                continue
            if parsing_event.start_mark.line != parsing_event.end_mark.line:
                return 'YAML multiline scalar values in flow notation are disallowed (use "|" or ">")'

        fields = set(meta.keys())

        missing = _REQUIRED_FIELDS - fields
        if len(missing) > 0:
            return 'Required fields missing: %s' % ', '.join(list(missing))

        unrecognized = fields - _VALID_FIELDS
        if len(unrecognized) > 0:
            return 'Unrecognized fields: %s' % ', '.join(list(unrecognized))
