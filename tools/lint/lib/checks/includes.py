import os
import re

from ..check import Check
from ..frontmatter import parse

class CheckIncludes(Check):
    '''Ensure tests make use of the harness files that they require via the
    `includes` directive.'''
    ID = 'INCLUDES'
    _cache = dict()

    @staticmethod
    def _remove_frontmatter(source):
        return re.sub(
            r'/\*---.*---\*/', '', source, flags=re.DOTALL
        )

    @staticmethod
    def _load(include_name):
        if include_name not in CheckIncludes._cache:
            with open(os.path.join('harness', include_name), 'r') as f:
                source = f.read()

            parsed = parse(source)
            if not parsed:
                raise Exception(f"Failed to parse {include_name}")
            CheckIncludes._cache[include_name] = {
                'name': include_name,
                'source': CheckIncludes._remove_frontmatter(source),
                'defines': parsed['defines'],
                'allow_unused': parsed.get('allow_unused', False),
            }

        return CheckIncludes._cache.get(include_name)

    @staticmethod
    def _has_reference(source, names):
        for name in names:
            if name in source:
                return True
        return False

    @staticmethod
    def _get_includes_flow_list(source):
        match = re.search(r"includes:\s+\[(?P<includes>.+)\]", source)
        return [inc.strip() for inc in match.group('includes').split(',') if inc] if match else []

    def run(self, name, meta, source):
        if not meta or 'includes' not in meta:
            return

        if meta['includes'] != CheckIncludes._get_includes_flow_list(source):
            return 'If present, the `includes` tag must use flow style, eg. includes: [include1.js, include2.js]'

        harness_files = [self._load(name) for name in meta['includes']]

        if len(harness_files) == 0:
            return 'If present, the `includes` tag must have at least one member'

        without_frontmatter = self._remove_frontmatter(source)

        unused = []
        for harness_file in harness_files:
            if harness_file['allow_unused']:
                continue

            if self._has_reference(without_frontmatter, harness_file['defines']):
                continue

            # If the test file does not reference a value defined by a given
            # include file, inspect each of the other include files for such a
            # reference.
            for other_harness_file in harness_files:
                if other_harness_file == harness_file:
                    continue

                if self._has_reference(other_harness_file['source'], harness_file['defines']):
                    break
            else:
                unused.append(harness_file['name'])

        if len(unused) > 0:
            return 'Unused includes: %s' % ', '.join(sorted(unused))
