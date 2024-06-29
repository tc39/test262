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
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

var a = [];

// Test up to 200 to cover tunables such as js::PropertyTree::MAX_HEIGHT.
for (var i = 0; i < 200; i++) {
    a.push("b" + i);
    assertThrowsInstanceOfWithMessage(
        () => eval("(function ([" + a.join("],[") + "],a,a){})"),
        SyntaxError,
        'duplicate argument names not allowed in this context');
}
