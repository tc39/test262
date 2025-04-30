/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Assertion redefining length property of a frozen array
esid: pending
---*/

var arr = Object.freeze([]);
Object.defineProperty(arr, "length", {});
