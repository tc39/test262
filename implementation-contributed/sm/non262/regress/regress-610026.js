// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 4 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var expect = "pass";
var actual;

// Scripts used to be limited to 2**20 blocks, but no longer since the frontend
// rewrite.  The exact limit-testing here should all pass now, not pass for
// 2**20 - 1 and fail for 2**20.
var s = "{}";
for (var i = 0; i < 21; i++)
    s += s;

try {
    eval(s);
    actual = "pass";
} catch (e) {
    actual = "fail: " + e;
}

assert.sameValue(actual, expect);

s += s.slice(0, -4);

try {
    eval(s);
    actual = "pass";
} catch (e) {
    actual = "fail: " + e;
}

assert.sameValue(actual, expect);

s += "{}";

try {
    eval(s);
    actual = "pass";
} catch (e) {
    actual = "fail: " + e;
}

assert.sameValue(actual, expect);

