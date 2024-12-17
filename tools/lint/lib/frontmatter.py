import re
import yaml

class Result(dict):
    def __init__(self, meta, events):
        self.parsing_events = events
        super(Result, self).__init__(**meta)

class MyLoader(yaml.SafeLoader):
    events = None

    def __init__(self, *args, **kwargs):
        MyLoader.events = []
        super(MyLoader, self).__init__(*args, **kwargs)

    def get_event(self):
        event = super(MyLoader, self).get_event()
        MyLoader.events.append(event)
        return event

def parse(src):
    '''Parse the YAML-formatted metadata found in a given string of source
    code. Tolerate missing or invalid metadata; those conditions are handled by
    a dedicated "Check" instance.'''

    match = re.search(r'/\*---(.*)---\*/', src, re.DOTALL)
    if not match:
        return None

    try:
        # NB: Call strip() to match parseTestRecord.
        return Result(yaml.load(match.group(1).strip(), MyLoader), MyLoader.events)
    except (yaml.scanner.ScannerError, yaml.parser.ParserError):
        return None
