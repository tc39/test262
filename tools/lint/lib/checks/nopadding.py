from ..check import Check
import re

class CheckNoPadding(Check):
    '''Ensure frontmatter string tags doesn't contain leading empty lines'''
    ID = 'NOPADDING'

    def __init__(self):
        self.noPadding = re.compile(r"^(?![\r\n])[\s\S]*")

    def run(self, name, meta, source):
        if not meta:
            return

        if 'description' in meta:
            if self.noPadding.match(meta['description']) == None:
                return 'The `description` tag should not have leading empty lines'

        if 'info' in meta:
            if self.noPadding.match(meta['info']) == None:
                return 'The `info` tag should not have leading empty lines'
