// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

if (typeof disassemble != 'undefined')
{
    var func = disassemble(function() { return "c\\d"; })

    // The disassembled function will contain a bytecode "string" with the content of the string next to it.
    // Check if that string isn't over-escaped i.e. \\ isn't escaped to \\\\ .
    assert.sameValue(func.indexOf("\\\\\\\\"), -1)
}

