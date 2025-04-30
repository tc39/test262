/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Do not assert: !(attrs & (JSPROP_GETTER | JSPROP_SETTER)) with Object.defineProperty
esid: pending
---*/

var o = { x: function(){} };
Object.defineProperty(o, "x", { get: function(){} });
