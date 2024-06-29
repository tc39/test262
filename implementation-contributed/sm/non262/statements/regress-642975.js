// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-statements-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var x = 0;
var y = 1;
var g = 1;

var expect = "y";
var actual;

try {
    eval("y: while (x) break\n/y/g.exec('y')");
    actual = RegExp.lastMatch;
} catch (e) {
    actual = '' + e;
}
assert.sameValue(actual, expect);

try {
    eval("y: while (x) continue\n/y/g.exec('y')");
    actual = RegExp.lastMatch;
} catch (e) {
    actual = '' + e;
}
assert.sameValue(actual, expect);

