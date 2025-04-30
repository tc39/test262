/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Do not assert: !(attrs & (JSPROP_GETTER | JSPROP_SETTER)) with Object.defineProperty
esid: pending
---*/

var o = { x: function(){} };
Object.defineProperty(o, "x", { get: function(){} });
