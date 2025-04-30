/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Assertion redefining length property of a frozen array
esid: pending
---*/

var arr = Object.freeze([]);
Object.defineProperty(arr, "length", {});
