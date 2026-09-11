import re
import yaml

try:
    # The libyaml-backed parser is roughly an order of magnitude faster than
    # the pure-Python one, but it is not available in every environment.
    from yaml import CSafeLoader as Loader
except ImportError:
    from yaml import SafeLoader as Loader

class Result(dict):
    def __init__(self, meta, events):
        self.parsing_events = events
        super(Result, self).__init__(**meta)

def parse(src):
    '''Parse the YAML-formatted metadata found in a given string of source
    code. Tolerate missing or invalid metadata; those conditions are handled by
    a dedicated "Check" instance.'''

    match = re.search(r'/\*---(.*)---\*/', src, re.DOTALL)
    if not match:
        return None

    # NB: Call strip() to match parseTestRecord.
    attrs = match.group(1).strip()

    try:
        # The event stream takes a second pass, since the
        # libyaml parser cannot be instrumented from Python.
        events = list(yaml.parse(attrs, Loader=Loader))
        return Result(yaml.load(attrs, Loader), events)
    except (yaml.scanner.ScannerError, yaml.parser.ParserError):
        return None
