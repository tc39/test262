# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import glob, os, re

from .case import Case
from .template import Template

caseFilenamePattern = re.compile(r'^[^\.].*\.case$')
templateFilenamePattern = re.compile(r'^[^\.].*\.template$')

class Expander:
    def __init__(self, case_dir):
        self.templates = dict()
        self.case_dir = case_dir

    def _load_templates(self, template_group, encoding):
        directory = os.path.join(self.case_dir, template_group)
        file_names = []

        for expanded_directory in glob.glob(directory):
            try:
                file_names.extend(
                    map(
                        lambda x: os.path.join(expanded_directory, x),
                        filter(self.is_template_file, os.listdir(expanded_directory))
                    )
                )
            except:
                file_names.append(expanded_directory)

        self.templates[template_group] = [
            Template(x, encoding) for x in file_names
        ]

    def _get_templates(self, template_group, encoding):
        if not template_group in self.templates:
            self._load_templates(template_group, encoding)

        return self.templates[template_group]

    def is_template_file(self, filename):
        return re.match(templateFilenamePattern, filename)

    def list_cases(self):
        for name in os.listdir(self.case_dir):
            full = os.path.join(self.case_dir, name)
            if os.path.isfile(full) and caseFilenamePattern.match(name):
                yield full

    def expand(self, encoding, case_file = None):
        if case_file:
            case_files = [case_file]
        else:
            case_files = self.list_cases()

        for case_file in case_files:
            for test in self.expand_case(case_file, encoding):
                yield test

    def expand_case(self, file_name, encoding):
        case = Case(file_name, encoding)
        localtemplates = [];

        if 'template' in case.attribs['meta']:
            localtemplates.append(case.attribs['meta']['template'])

        if 'templates' in case.attribs['meta']:
            localtemplates.extend(case.attribs['meta']['templates'])

        for t in localtemplates:
            template_group = t
            templates = self.templates.get(template_group)

            for template in self._get_templates(template_group, encoding):
                yield template.expand(file_name, os.path.basename(file_name[:-5]), case.attribs, encoding)
