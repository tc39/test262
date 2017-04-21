#!/usr/bin/env python
# Copyright (C) 2016 the V8 project authors. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import os, shutil, subprocess, sys

OUT_DIR = os.environ.get('OUT_DIR') or 'test'
SRC_DIR = os.environ.get('SRC_DIR') or 'src'

def shell(*args):
    sp = subprocess.Popen(list(args), stdout=subprocess.PIPE)
    cmd_str = ' '.join(args)

    print '> ' + cmd_str

    for line in iter(sp.stdout.readline, ''):
        sys.stdout.write(line)

    sp.communicate()

    if sp.returncode == 1:
        raise Exception('Command failed: ' + cmd_str)

targets = dict()
def target(*deps):
    def other(orig):
        def wrapped():
            print 'Running target: ' + orig.__name__

            for dep in deps:
                targets[dep]()
            return orig()
        wrapped.__name__ = orig.__name__
        targets[orig.__name__] = wrapped
        return wrapped
    return other

@target()
def build():
    shell(sys.executable, 'tools/generation/generator.py',
          'create',
          '--out', OUT_DIR,
          SRC_DIR)

@target()
def clean():
    shell(sys.executable, 'tools/generation/generator.py', 'clean', OUT_DIR)

if len(sys.argv) == 1:
    targets['build']()

for target in sys.argv[1:]:
    if not target in targets:
        sys.stderr.write('No target named: "' + target + '".\n' +
            'Available targets: ' + ', '.join(list(targets)) + '\n')
        sys.exit(1)
    targets[target]()
