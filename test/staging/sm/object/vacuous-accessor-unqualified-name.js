/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Using a name referring to a { get: undefined, set: undefined } descriptor shouldn't assert
esid: pending
---*/

Object.defineProperty(this, "x", { set: undefined, configurable: true });
x;
