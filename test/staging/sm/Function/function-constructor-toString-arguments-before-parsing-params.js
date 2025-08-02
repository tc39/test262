/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/assertThrowsValue.js]
description: |
  Convert all arguments passed to Function() to string before doing any parsing of the to-be-created Function's parameters or body text
esid: pending
---*/

assertThrowsValue(() => Function("@", { toString() { throw 42; } }), 42);
