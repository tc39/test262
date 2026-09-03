#!/usr/bin/env python3

import argparse
import json
import os
import re
import sys
import yaml

def read_features(filename):
    '''Get a list of string feature names from a test file's YAML-formatted
    frontmatter.'''
    with open(filename, 'r') as handle:
        frontmatter = None
        for line in handle:
            if frontmatter is not None:
                if line.strip() == '---*/':
                    break
                frontmatter += line
            if line.strip() == '/*---':
                frontmatter = ''

    assert frontmatter is not None, f'File has frontmatter: {filename}'

    return yaml.safe_load(frontmatter).get('features', [])

def file_is_test(filename):
    return not (filename.endswith('FIXTURE.js') or filename.endswith('.json'))

def pattern_from_path_spec(path_spec):
    return re.compile(re.sub('\\*', '.*', path_spec) + '(/|$)')

def get_filenames(path_spec):
    pattern = pattern_from_path_spec(path_spec)

    # path_spec is a literal path, not a pattern
    if pattern.pattern == path_spec + '(/|$)':
        if os.path.isfile(path_spec):
            yield path_spec
        elif os.path.isdir(path_spec):
            for root, _, files in os.walk(path_spec):
                test_files = filter(file_is_test, files)
                yield from [os.path.join(root, file) for file in test_files]
        else:
            raise AssertionError(f'No such file/directory: "{path_spec}"')
        return

    # Choose the optimal directory from which to conduct the search by using
    # all available static directory names in the path spec (e.g. `a/b/c` in
    # the path spec `a/b/c/*/d`)
    search_root = '.'
    for part in path_spec.split('/'):
        if '*' in part:
            break
        search_root = f'{search_root}/{part}'

    matched = False

    for root, _, files in os.walk(search_root):
        for file in files:
            file = os.path.join(root, file)

            if pattern.search(file):
                matched = True
                yield file

    assert matched, f'At least one matching file for "{path_spec}"'

def get_filenames_from_path_specs(path_specs):
    filenames = set()
    for path_spec in path_specs:
        if path_spec.startswith('!'):
            pattern = pattern_from_path_spec(path_spec[1:])
            used = False

            for filename in list(filenames):
                if pattern.search(filename):
                    filenames.remove(filename)
                    used = True

            assert used, f'Pathspec used at least once: "{path_spec}"'
        else:
            filenames.update(get_filenames(path_spec))
    return filenames

def match(file_path, tag_specs):
    tags = read_features(file_path)

    for tag_filter in tag_specs:
        if tag_filter.startswith('!'):
            if tag_filter[1:] in tags:
                return False
        else:
            if tag_filter not in tags:
                return False
    return True

def main(web_features_filename, manifest_filename):
    with open(web_features_filename, 'r') as handle:
        features = yaml.safe_load(handle)['features']
    manifest = {'data': dict(), 'version': 1}

    for feature in features:
        name = feature['name']
        path_specs = feature['files']
        tag_specs = feature.get('tags', [])

        manifest['data'][name] = [*filter(
            lambda candidate: match(candidate, tag_specs),
            get_filenames_from_path_specs(path_specs)
        )]

    if manifest_filename:
        with open(manifest_filename, 'w') as manifest_handle:
            manifest_handle.write(json.dumps(manifest))

if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Test262 web-features manifest regression checker'
    )

    parser.add_argument('--manifest', help='''The name of a JSON-formatted test
        manifest file to create''')

    args = parser.parse_args()

    main('./WEB_FEATURES.yml', args.manifest)

    print('./WEB_FEATURES.yml is conformant')
