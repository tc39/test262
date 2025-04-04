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

if (obj.length !== undefined) {
  throw new Test262Error('#0: var obj = {}; obj.length === undefined. Actual: ' + (obj.length));
} else {
  if (obj.join() !== "") {
    throw new Test262Error('#1: var obj = {}; obj.join = Array.prototype.join; obj.join() === "". Actual: ' + (obj.join()));
  }
  if (obj.length !== undefined) {
    throw new Test262Error('#2: var obj = {}; obj.join = Array.prototype.join; obj.join(); obj.length === undefined. Actual: ' + (obj.length));
  }
}

obj.length = undefined;
assert.sameValue(obj.join(), "", '#3: var obj = {}; obj.length = undefined; obj.join = Array.prototype.join; obj.join() === "');

assert.sameValue(obj.length, undefined, '#4: var obj = {}; obj.length = undefined; obj.join = Array.prototype.join; obj.join(); obj.length === undefined');

obj.length = null
assert.sameValue(obj.join(), "", '#5: var obj = {}; obj.length = null; obj.join = Array.prototype.join; obj.join() === ""');

assert.sameValue(obj.length, null, '#6: var obj = {}; obj.length = null; obj.join = Array.prototype.join; obj.join(); obj.length === null');
