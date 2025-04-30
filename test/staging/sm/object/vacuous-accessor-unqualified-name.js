/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Using a name referring to a { get: undefined, set: undefined } descriptor shouldn't assert
esid: pending
---*/

Object.defineProperty(this, "x", { set: undefined, configurable: true });
x;
