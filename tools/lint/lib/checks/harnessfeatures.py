import yaml

from ..check import Check

class CheckHarnessFeatures(Check):
    '''Ensure tests that use harnesses with explicit features flag requirements
    specify only `features` from a list of valid values.'''
    ID = 'HARNESS_FEATURES'

    def __init__(self):
        with open('./harness/features.yml', 'r') as f:
            self.include_has_features = yaml.load(f.read())

    def comparison_result_lists(self, meta):

        result = {'features': set(), 'missing': set()}

        if not meta or 'includes' not in meta:
            return result

        meta_features = meta['features'] if 'features' in meta else []
        meta_includes = meta['includes']
        features = []


        if len(meta_includes) == 0:
            return result

        for meta_include in meta_includes:
            if meta_include in self.include_has_features:
                features = self.include_has_features[meta_include]

            if len(features) == 0:
                return result

            if 'features' not in meta or len(meta['features']) == 0:
                result['missing'].update(features)
            else:
                meta_features = meta['features']

                for feature in features:
                    if feature not in meta_features:
                        result['missing'].add(feature)

        result['features'].update(meta_features);

        return result


    def run(self, name, meta, source):

        result = self.comparison_result_lists(meta)

        if len(result['features']) == 0 and len(result['missing']) == 0:
            return

        if len(result['missing']) > 0:
            if len(result['features']) == 0:
                return 'Missing: `features: [%s]`' % ', '.join(list(result['missing']))
            else:
                return 'Missing from `features`: %s' % ', '.join(list(result['missing']))
        else:
            return
