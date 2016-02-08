#!/usr/bin/env python

import shutil, subprocess, sys, os, unittest

testDir = os.path.dirname(os.path.relpath(__file__))
OUT_DIR = os.path.join(testDir, 'out')
EXPECTED_DIR = os.path.join(testDir, 'expected')
ex = os.path.join(testDir, '..', 'compile.py')

class TestGeneration(unittest.TestCase):
    maxDiff = None

    def fixture(self, name):
        relpath = os.path.relpath(os.path.join(testDir, 'fixtures', name))
        sp = subprocess.Popen([ex, '-o', OUT_DIR, relpath], stdout=subprocess.PIPE)
        stdout, stderr = sp.communicate()
        return dict(stdout=stdout, stderr=stderr, returncode=sp.returncode)

    def compareTrees(self, expectedPath, actualPath):
        expectedFiles = []
        actualFiles = []

        for root, _, files in os.walk(expectedPath):
            expectedFiles += map(lambda x: os.path.join(root, x), files)

        for root, _, files in os.walk(actualPath):
            actualFiles += map(lambda x: os.path.join(root, x), files)

        self.assertListEqual(
            map(lambda x: os.path.relpath(expectedPath, x), expectedFiles),
            map(lambda x: os.path.relpath(actualPath, x), actualFiles))

        for expectedFile, actualFile in zip(expectedFiles, actualFiles):
            with open(expectedFile) as expectedHandle:
                with open(actualFile) as actualHandle:
                    self.assertMultiLineEqual(
                        expectedHandle.read(),
                        actualHandle.read())

    def tearDown(self):
        shutil.rmtree(OUT_DIR, ignore_errors=True)

    def test_normal(self):
        result = self.fixture('normal.case')
        self.assertEqual(result['returncode'], 0)
        self.compareTrees(os.path.join(EXPECTED_DIR), OUT_DIR)

if __name__ == '__main__':
    unittest.main()
