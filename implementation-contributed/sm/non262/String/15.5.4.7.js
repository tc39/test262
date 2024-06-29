// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-String-shell.js
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

var BUGNUMBER = 612838;
var summary = "String.prototype.indexOf with empty searchString";

print(BUGNUMBER + ": " + summary);

assert.sameValue("123".indexOf("", -1), 0);
assert.sameValue("123".indexOf("", 0), 0);
assert.sameValue("123".indexOf("", 1), 1);
assert.sameValue("123".indexOf("", 3), 3);
assert.sameValue("123".indexOf("", 4), 3);
assert.sameValue("123".indexOf("", 12345), 3);

print("All tests passed!");
