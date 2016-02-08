import os, re
import codecs, yaml

from util.find_comments import find_comments
from util.parse_yaml import parse_yaml

indentPattern = re.compile(r'^(\s*)')
interpolatePattern = re.compile(r'\{\s*(\S+)\s*\}')

def _indent(text, prefix = '    '):
    '''Prefix a block of text (as defined by the "line break" control
    character) with some character sequence.'''

    if isinstance(text, list):
        lines = text
    else:
        lines = text.split('\n')

    return prefix + ('\n' + prefix).join(lines)

class Template:
    def __init__(self, filename):
        self.filename = filename

        with open(filename) as template_file:
            self.source = template_file.read()

        self.attribs = dict()
        self.regions = []

        self._parse()

    def _remove_comment(self, comment):
        '''Create a region that is not intended to be referenced by any case,
        ensuring that the comment is not emitted in the rendered file.'''
        name = '__remove_comment_' + str(comment['firstchar']) + '__'
        self.regions.insert(0, dict(name=name, **comment))

    def _parse(self):
        for comment in find_comments(self.source):
            meta = parse_yaml(comment['source'])

            # Do not emit the template's frontmatter in generated files
            # (file-specific frontmatter is generated as part of the rendering
            # process)
            if meta:
                self.attribs['meta'] = meta
                self._remove_comment(comment)
                continue

            # Do not emit license information in generated files (recognized as
            # comments preceeding the YAML frontmatter)
            if not self.attribs.get('meta'):
                self._remove_comment(comment)
                continue

            match = interpolatePattern.match(comment['source'])

            if match == None:
                continue

            self.regions.insert(0, dict(name=match.group(1), **comment))

    def expand_regions(self, source, context):
        lines = source.split('\n')

        for region in self.regions:
            whitespace = indentPattern.match(lines[region['lineno']]).group(1)
            value = context['regions'].get(region['name'], '')
            source = source[:region['firstchar']] + \
                _indent(value, whitespace).lstrip() + \
                source[region['lastchar']:]

        setup = context['regions'].get('setup')

        if setup:
            source = setup + '\n' + source

        return source

    def _frontmatter(self, case_filename, case_values):
        description = case_values['meta']['desc'].strip() + \
            ' (' + self.attribs['meta']['name'].strip() + ')'
        lines = []

        lines += [
            '// This file was procedurally generated from the following sources:',
            '// - ' + case_filename,
            '// - ' + self.filename,
            '/*---',
            'description: ' + description,
            'es6id: ' + self.attribs['meta']['es6id']
        ]

        features = []
        features += case_values['meta'].get('features', [])
        features += self.attribs['meta'].get('features', [])
        if len(features):
            lines += ['features: ' + yaml.dump(features)]

        if case_values['meta'].get('negative'):
            lines += ['negative: ' + case_values['meta'].get('negative')]

        lines += [
            'info: >',
            _indent(self.attribs['meta']['info']),
            '',
            _indent(case_values['meta']['info']),
            '---*/'
        ]

        return '\n'.join(lines)

    def expand(self, case_filename, case_name, case_values, encoding):
        frontmatter = self._frontmatter(case_filename, case_values)
        body = self.expand_regions(self.source, case_values)

        return dict(
            name = self.attribs['meta']['path'] + case_name + '.js',
            source = codecs.encode(frontmatter + '\n' + body, encoding)
        )
