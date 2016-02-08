import yaml, re

yamlPattern = re.compile(r'\---[\n\s]*((?:\s|\S)*)[\n\s*]---',
                         flags=re.DOTALL|re.MULTILINE)

def parse_yaml(string):
    match = yamlPattern.match(string)
    return match and yaml.safe_load(match.group(1))
