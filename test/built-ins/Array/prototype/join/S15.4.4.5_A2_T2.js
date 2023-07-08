// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The join function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.join
description: If ToUint32(length) is zero, return the empty string
---*/

var obj = {};
obj.join = Array.prototype.join;

obj.length = NaN;
assert.sameValue(obj.join(), "", '#1: var obj = {}; obj.length = NaN; obj.join = Array.prototype.join; obj.join() === ""');

assert.sameValue(obj.length, NaN, "obj.length is NaN");

obj.length = Number.NEGATIVE_INFINITY;
assert.sameValue(obj.join(), "", '#5: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.join = Array.prototype.join; obj.join() === ""');

assert.sameValue(obj.length, Number.NEGATIVE_INFINITY, '#6: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.join = Array.prototype.join; obj.join(); obj.length === Number.NEGATIVE_INFINITY');

obj.length = -0;
assert.sameValue(obj.join(), "", '#7: var obj = {}; obj.length = -0; obj.join = Array.prototype.join; obj.join() === ""');

if (obj.length !== -0) {
  throw new Test262Error('#8: var obj = {}; obj.length = -0; obj.join = Array.prototype.join; obj.join(); obj.length === 0. Actual: ' + (obj.length));
} else {
  if (1 / obj.length !== Number.NEGATIVE_INFINITY) {
    throw new Test262Error('#8: var obj = {}; obj.length = -0; obj.join = Array.prototype.join; obj.join(); obj.length === -0. Actual: ' + (obj.length));
  }
}

obj.length = 0.5;
assert.sameValue(obj.join(), "", '#9: var obj = {}; obj.length = 0.5; obj.join = Array.prototype.join; obj.join() === ""');

assert.sameValue(obj.length, 0.5, '#10: var obj = {}; obj.length = 0.5; obj.join = Array.prototype.join; obj.join(); obj.length === 0.5');

var x = new Number(0);
obj.length = x;
assert.sameValue(obj.join(), "", '#11: var x = new Number(0); var obj = {}; obj.length = x; obj.join = Array.prototype.join; obj.join() === ""');

assert.sameValue(obj.length, x, '#12: var x = new Number(0); var obj = {}; obj.length = x; obj.join = Array.prototype.join; obj.join(); obj.length === x');
