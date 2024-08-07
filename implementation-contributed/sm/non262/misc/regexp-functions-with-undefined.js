// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-misc-shell.js
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

var a = /undefined/.exec();
assert.sameValue(a[0], 'undefined');
assert.sameValue(a.length, 1);

a = /undefined/.exec(undefined);
assert.sameValue(a[0], 'undefined');
assert.sameValue(a.length, 1);

assert.sameValue(/undefined/.test(), true);
assert.sameValue(/undefined/.test(undefined), true);

assert.sameValue(/aaaa/.exec(), null);
assert.sameValue(/aaaa/.exec(undefined), null);

assert.sameValue(/aaaa/.test(), false);
assert.sameValue(/aaaa/.test(undefined), false);


assert.sameValue("undefined".search(), 0);
assert.sameValue("undefined".search(undefined), 0);
assert.sameValue("aaaa".search(), 0);
assert.sameValue("aaaa".search(undefined), 0);

a = "undefined".match();
assert.sameValue(a[0], "");
assert.sameValue(a.length, 1);
a = "undefined".match(undefined);
assert.sameValue(a[0], "");
assert.sameValue(a.length, 1);
a = "aaaa".match();
assert.sameValue(a[0], "");
assert.sameValue(a.length, 1);
a = "aaaa".match(undefined);
assert.sameValue(a[0], "");
assert.sameValue(a.length, 1);

