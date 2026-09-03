import re

from ..check import Check

class CheckFeatures(Check):
    '''Ensure tests specify only `features` from a list of valid values.'''
    ID = 'FEATURES'

    def __init__(self, filename):
        with open(filename, 'r') as f:
            self.valid_features = self._parse(f.read())

    @staticmethod
    def _parse(content):
        features = []
        for line in content.splitlines():
            line = re.sub(r'\s*#.*', '', line)
            if not line:
                continue
            features.append(line)
        return features

    def run(self, name, meta, source):
        if not meta or 'features' not in meta:
            return

        features = meta['features']

        if len(features) == 0:
            return 'If present, the `features` tag must have at least one member'

        unrecognized = set(features) - set(self.valid_features)
        if len(unrecognized) > 0:
            return 'Unrecognized features: %s' % ', '.join(sorted(unrecognized))

        if len(set(features)) != len(features):
            return 'The `features` tag may not include duplicate entries'
