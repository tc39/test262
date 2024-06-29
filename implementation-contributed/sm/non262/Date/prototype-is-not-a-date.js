// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Date-shell.js
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

var BUGNUMBER = 861219;
var summary = "Date.prototype isn't an instance of Date";

print(BUGNUMBER + ": " + summary);

assert.sameValue(Date.prototype instanceof Date, false);
assert.sameValue(Date.prototype.__proto__, Object.prototype);

