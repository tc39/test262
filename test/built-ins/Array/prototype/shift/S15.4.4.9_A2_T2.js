// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The shift function is intentionally generic.
    It does not require that its this value be an Array object
esid: sec-array.prototype.shift
description: >
    If ToUint32(length) equal zero, call the [[Put]] method  of this
    object with arguments "length" and 0 and return undefined
---*/

var obj = {};
obj.shift = Array.prototype.shift;

obj.length = NaN;
var shift = obj.shift();
assert.sameValue(shift, undefined, '#1: var obj = {}; obj.length = NaN; obj.shift = Array.prototype.shift; obj.shift() === undefined');

assert.sameValue(obj.length, 0, '#2: var obj = {}; obj.length = NaN; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0');

obj.length = Number.NEGATIVE_INFINITY;
var shift = obj.shift();
assert.sameValue(shift, undefined, '#5: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.shift = Array.prototype.shift; obj.shift() === undefined');

assert.sameValue(obj.length, 0, '#6: var obj = {}; obj.length = Number.NEGATIVE_INFINITY; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0');

obj.length = -0;
var shift = obj.shift();
assert.sameValue(shift, undefined, '#7: var obj = {}; obj.length = -0; obj.shift = Array.prototype.shift; obj.shift() === undefined');

if (obj.length !== 0) {
  throw new Test262Error('#8: var obj = {}; obj.length = -0; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0. Actual: ' + (obj.length));
} else {
  if (1 / obj.length !== Number.POSITIVE_INFINITY) {
    throw new Test262Error('#8: var obj = {}; obj.length = -0; obj.shift = Array.prototype.shift; obj.shift(); obj.length === +0. Actual: ' + (obj.length));
  }
}

obj.length = 0.5;
var shift = obj.shift();
assert.sameValue(shift, undefined, '#9: var obj = {}; obj.length = 0.5; obj.shift = Array.prototype.shift; obj.shift() === undefined');

assert.sameValue(obj.length, 0, '#10: var obj = {}; obj.length = 0.5; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0');

obj.length = new Number(0);
var shift = obj.shift();
assert.sameValue(shift, undefined, '#11: var obj = {}; obj.length = new Number(0); obj.shift = Array.prototype.shift; obj.shift() === undefined');

assert.sameValue(obj.length, 0, '#12: var obj = {}; obj.length = new Number(0); obj.shift = Array.prototype.shift; obj.shift(); obj.length === 0');
