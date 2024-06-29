// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Number-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommonn.org/licenses/publicdomain/
 */

var BUGNUMBER = 872853;
var summary = 'Various tests of ToNumber(string), particularly +"0x" being NaN';

print(BUGNUMBER + ": " + summary);

/**************
 * BEGIN TEST *
 **************/

assert.sameValue(+"0x", NaN);
assert.sameValue(+"\t0x", NaN);
assert.sameValue(+"0x\n", NaN);
assert.sameValue(+"\n0x\t", NaN);
assert.sameValue(+"0x0", 0);
assert.sameValue(+"0xa", 10);
assert.sameValue(+"0xff", 255);
assert.sameValue(+"-0x", NaN);
assert.sameValue(+"-0xa", NaN);
assert.sameValue(+"-0xff", NaN);
assert.sameValue(+"0xInfinity", NaN);
assert.sameValue(+"+Infinity", Infinity);
assert.sameValue(+"-Infinity", -Infinity);
assert.sameValue(+"\t+Infinity", Infinity);
assert.sameValue(+"-Infinity\n", -Infinity);
assert.sameValue(+"+ Infinity", NaN);
assert.sameValue(+"- Infinity", NaN);

/******************************************************************************/

print("Tests complete");
