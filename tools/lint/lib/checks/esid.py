from ..check import Check
import re

class CheckEsid(Check):
    '''Ensure tests specify only valid `es6id's'''
    ID = 'ESID'

    def __init__(self):
        #self.es5idRegex = re.compile(r"^S?(B|\d+)(\.\d+)+(-(\d+|[a-z]|i+))*(_A\d(\.\d+)?(_T\d(\.\d+)?)?)?$")
        self.es6idRegex = re.compile(r"^(S?(B|\d+)(\.\d+)+(((_A\d\.\d)?_T?\d)|[ _]S\d+(\.[a-z])*)?(, |$))+")
        # Simplified version of the WhatWG URL specification for fragment
        # parsing:
        # https://url.spec.whatwg.org/#fragment-state
        # However, that must also include "%"
        self.esidRegex = re.compile(
            u"^[a-z0-9!$%&'()*+,\\-./:;=?@_~\u00a0-\U0010fffd]+$",
            re.IGNORECASE
        )

    def run(self, name, meta, source):
        if not meta:
            return

        if 'es6id' not in meta and 'esid' not in meta:
            return

        # es5ids are a mess
        #if 'es5id' in meta:
        #  es5id = str(meta['es5id'])
        #  if self.es5idRegex.match(es5id) == None:
        #      return 'The `es5id` tag has the wrong format: %s' % es5id

        if 'es6id' in meta:
            es6id = str(meta['es6id'])
            if self.es6idRegex.match(es6id) == None:
                return 'The `es6id` tag has the wrong format: %s' % es6id

        if 'esid' in meta:
            esid = str(meta['esid'])
            if self.esidRegex.match(esid) == None:
                return 'The `esid` tag has the wrong format: %s' % esid


