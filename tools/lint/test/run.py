#!/usr/bin/env python
# Copyright (C) 2017 Mike Pennisi. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import shutil, subprocess, sys, os, unittest, tempfile

testDir = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(testDir, 'out')
ex = os.path.join(testDir, '..', 'lint.py')

class TestLinter(unittest.TestCase):
    maxDiff = None

    def fixture(self, name, content):
        fspath = os.path.join(OUT_DIR, name)
        with open(fspath, 'w') as f:
            f.write(content)
        return fspath

    def lint(self, args):
        args[:0] = [sys.executable, ex]
        sp = subprocess.Popen(args,
                              stdout=subprocess.PIPE,
                              stderr=subprocess.PIPE,
                              cwd=os.path.join(testDir, 'fixtures')
                              )
        stdout, stderr = sp.communicate()
        return dict(stdout=stdout, stderr=stderr, returncode=sp.returncode)

    def setUp(self):
        os.mkdir(OUT_DIR)

    def tearDown(self):
        shutil.rmtree(OUT_DIR, ignore_errors=True)

    def test_no_file(self):
        result = self.lint(['non-existent-file.js'])
        self.assertNotEqual(result["returncode"], 0)

    def test_exceptions_single(self):
        test_content = ('// Copyright (C) 2017 Mike Pennisi. All rights reserved.\n' +
            '// This code is governed by the BSD license found in the LICENSE file.\n')
        test_file = self.fixture('input.js', test_content)
        exceptions_content = test_file + ' FRONTMATTER'
        exceptions_file = self.fixture('lint.exceptions', exceptions_content)

        result = self.lint([test_file])

        self.assertNotEqual(result['returncode'], 0)

        result = self.lint(['--exceptions', exceptions_file, test_file])

        self.assertEqual(result['returncode'], 0)

    def test_exceptions_comment(self):
        test_content = ('// Copyright (C) 2017 Mike Pennisi. All rights reserved.\n' +
            '// This code is governed by the BSD license found in the LICENSE file.\n')
        test_file = self.fixture('input.js', test_content)
        exceptions_content = ('# One comment\n' +
            '# Another comment\n' +
            test_file + ' FRONTMATTER')
        exceptions_file = self.fixture('lint.exceptions', exceptions_content)

        result = self.lint([test_file])

        self.assertNotEqual(result['returncode'], 0)

        result = self.lint(['--exceptions', exceptions_file, test_file])

        self.assertEqual(result['returncode'], 0)

def create_file_test(name, fspath):
    '''Dynamically generate a function that may be used as a test method with
    the Python `unittest` module.'''

    def test(self):
        with open(fspath, 'r') as f:
            contents = f.read()
        expected, input = contents.split('^ expected errors | v input\n')
        expected = expected.split()
        tmp_file = self.fixture(name, input)
        result = self.lint([tmp_file])
        if len(expected) == 0:
            self.assertEqual(result['returncode'], 0)
            self.assertEqual(result['stderr'], b'')
        else:
            self.assertNotEqual(result['returncode'], 0)
            stderr = result['stderr'].decode("utf-8")
            for err in expected:
                self.assertIn(err, stderr)

    test.__name__ = 'test_' + file_name.split('.')[0]
    return test

dirname = os.path.join(os.path.abspath(testDir), 'fixtures', 'test')
for file_name in os.listdir(dirname):
    full_path = os.path.join(dirname, file_name)
    if (not os.path.isfile(full_path) or file_name.startswith('.')):
        continue

    t = create_file_test(file_name, full_path)
    setattr(TestLinter, t.__name__, t)

if __name__ == '__main__':
    unittest.main()
