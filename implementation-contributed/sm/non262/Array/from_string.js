// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
- non262-Array-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Array.from on a string iterates over the string.
assert.deepEqual(Array.from("test string"),
             ['t', 'e', 's', 't', ' ', 's', 't', 'r', 'i', 'n', 'g']);

// Array.from on a string handles surrogate pairs correctly.
var gclef = "\uD834\uDD1E"; // U+1D11E MUSICAL SYMBOL G CLEF
assert.deepEqual(Array.from(gclef), [gclef]);
assert.deepEqual(Array.from(gclef + " G"), [gclef, " ", "G"]);

// Array.from on a string calls the @@iterator method.
String.prototype[Symbol.iterator] = function* () { yield 1; yield 2; };
assert.deepEqual(Array.from("anything"), [1, 2]);

// If the iterator method is deleted, Strings are still arraylike.
delete String.prototype[Symbol.iterator];
assert.deepEqual(Array.from("works"), ['w', 'o', 'r', 'k', 's']);
assert.deepEqual(Array.from(gclef), ['\uD834', '\uDD1E']);

