#!/usr/bin/env python
# Copyright (C) 2025 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import shutil, subprocess, sys, os, unittest, tempfile
import json

testDir = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(testDir, 'out')
ex = os.path.join(testDir, '..', 'check-coverage.py')

class TestCheckCoverage(unittest.TestCase):
    maxDiff = None

    def fixture(self, name, content):
        fspath = os.path.join(OUT_DIR, name)
        with open(fspath, 'w') as f:
            f.write(json.dumps(content))
        return fspath

    def check(self, args):
        args[:0] = [sys.executable, ex]
        sp = subprocess.Popen(args,
                              stdout=subprocess.PIPE,
                              stderr=subprocess.PIPE
                              )
        stdout, stderr = sp.communicate()
        return dict(stdout=stdout, stderr=stderr, returncode=sp.returncode)

    def setUp(self):
        # Defensively remove the output directory in case a critical error
        # during a prior test execution prevented the removal.
        shutil.rmtree(OUT_DIR, ignore_errors=True)

        os.mkdir(OUT_DIR)

    def tearDown(self):
        shutil.rmtree(OUT_DIR, ignore_errors=True)

    def test_missing_base(self):
        new = self.fixture('new.json', {
            'data': {},
            'version': 1
        })

        result = self.check(['--new', new])

        self.assertNotEqual(result['returncode'], 0)

    def test_missing_new(self):
        base = self.fixture('base.json', {
            'data': {},
            'version': 1
        })

        result = self.check(['--base', base])

        self.assertNotEqual(result['returncode'], 0)


    def test_empty_manifests(self):
        base = self.fixture('base.json', {
            'data': {},
            'version': 1
        })
        new = self.fixture('new.json', {
            'data': {},
            'version': 1
        })

        result = self.check(['--base', base, '--new', new])

        self.assertEqual(result['returncode'], 0)

    def test_unsupported_base_manifest(self):
        base = self.fixture('base.json', {
            'data': {},
            'version': 2
        })
        new = self.fixture('new.json', {
            'data': {},
            'version': 1
        })

        result = self.check(['--base', base, '--new', new])

        self.assertNotEqual(result['returncode'], 0)

    def test_unsupported_new_manifest(self):
        base = self.fixture('base.json', {
            'data': {},
            'version': 1
        })
        new = self.fixture('new.json', {
            'data': {},
            'version': 2
        })

        result = self.check(['--base', base, '--new', new])

        self.assertNotEqual(result['returncode'], 0)

    def test_coverage_regression_removed_feature(self):
        manifest_base = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        manifest_new = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        base = self.fixture('base.json', manifest_base)
        new = self.fixture('new.json', manifest_new)

        result = self.check(['--base', base, '--new', new])

        self.assertNotEqual(result['returncode'], 0)

    def test_coverage_regression_one_fewer(self):
        manifest_base = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        manifest_new = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        base = self.fixture('base.json', manifest_base)
        new = self.fixture('new.json', manifest_new)

        result = self.check(['--base', base, '--new', new])

        self.assertNotEqual(result['returncode'], 0)

    def test_identical_coverage(self):
        manifest = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        base = self.fixture('base.json', manifest)
        new = self.fixture('new.json', manifest)

        result = self.check(['--base', base, '--new', new])

        self.assertEqual(result['returncode'], 0)

    def test_equivalent_coverage(self):
        manifest_base = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        manifest_new = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-d.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        base = self.fixture('base.json', manifest_base)
        new = self.fixture('new.json', manifest_new)

        result = self.check(['--base', base, '--new', new])

        self.assertEqual(result['returncode'], 0)

    def test_extended_coverage_new_file(self):
        manifest_base = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        manifest_new = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js', 'test/3-c.js']
            },
            'version': 1
        }
        base = self.fixture('base.json', manifest_base)
        new = self.fixture('new.json', manifest_new)

        result = self.check(['--base', base, '--new', new])

        self.assertEqual(result['returncode'], 0)

    def test_extended_coverage_new_feature(self):
        manifest_base = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js']
            },
            'version': 1
        }
        manifest_new = {
            'data': {
                'feature1': ['test/1-a.js'],
                'feature2': ['test/2-a.js', 'test/2-b.js', 'test/2-c.js'],
                'feature3': ['test/3-a.js', 'test/3-b.js'],
                'feature4': ['test/4-a.js', 'test/4-b.js']
            },
            'version': 1
        }
        base = self.fixture('base.json', manifest_base)
        new = self.fixture('new.json', manifest_new)

        result = self.check(['--base', base, '--new', new])

        self.assertEqual(result['returncode'], 0)

if __name__ == '__main__':
    unittest.main()
