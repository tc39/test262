/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Object.freeze([]).pop() must throw a TypeError
esid: pending
---*/

assert.throws(TypeError, function() {
  Object.freeze([]).pop();
});
