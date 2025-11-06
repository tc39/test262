import os

def collect_files(path):
    '''Given a path to a file, yield that path. Given a path to a directory,
    yield the path of all files within that directory recursively, omitting any
    that begin with a period (.) character.'''

    if os.path.isfile(path):
        yield path.replace(os.sep, '/')
        return

    if not os.path.isdir(path):
        raise ValueError('Not found: "%s"' % path)

    for root, dirs, file_names in os.walk(path):
        for file_name in file_names:
            if file_name.startswith('.'):
                continue

            file_path = os.path.join(root, file_name)
            yield file_path.replace(os.sep, '/')
