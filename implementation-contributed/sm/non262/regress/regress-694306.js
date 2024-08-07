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

var x;
try {
    eval("var {if} = {'if': 1};");
} catch (exc) {
    x = exc;
}
assert.sameValue(x instanceof SyntaxError, true);
assert.sameValue("if" in this, false);

x = undefined;
try {
    Function("var {if} = {'if': 1};");
} catch (exc) {
    x = exc;
}
assert.sameValue(x instanceof SyntaxError, true);

