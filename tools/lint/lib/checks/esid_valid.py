from ..check import Check
import re
import json

class CheckEsidValid(Check):
    '''Ensure tests specify only valid `es6id's'''
    ID = 'ESID'

    @staticmethod
    def _parse(f):
        biblio = json.load(f)
        entries = biblio["entries"]
        return set(e["id"] for e in entries if "id" in e)

    def __init__(self, filename):
        with open(filename, 'r') as f:
            self.ids = self._parse(f)
        self.numeric_id = re.compile(r"(\d+)(\.\d+)+")

    def test_valid(self, meta, key):
        if key not in meta:
            return

        id = str(meta[key])
        if id in self.ids:
            return

        if self.numeric_id.match(id) is not None:
            # Ignore for now.
            return

        if id.lower() in self.ids:
            return 'The `%s` tag should be in lower case: %s' % (key, id)

        return 'The `%s` tag is unknown: %s' % (key, id)

    def run(self, name, meta, source):
        if not meta:
            return

        for key in ['es6id', 'esid']:
            result = self.test_valid(meta, key)
            if result:
                return result
