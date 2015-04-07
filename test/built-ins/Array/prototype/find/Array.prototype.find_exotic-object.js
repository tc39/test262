// Copyright (c) 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*---
es6id: 22.1.3.8
description: >
    The find() method returns a value in the array, if an
    element in the array satisfies the provided testing function.
    Otherwise undefined is returned.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
includes: [compareArray.js]
---*/

var l = -1;
var o = -1;
var v = -1;
var k = -1;
var a = {
  prop1: "val1",
  prop2: "val2",
  isValid: function() {
    return this.prop1 === "val1" && this.prop2 === "val2";
  }
};

Array.prototype.push.apply(a, [30, 31, 32]);
var found = Array.prototype.find.call(a, function(val, key, obj) {
  o = obj;
  l = obj.length;
  v = val;
  k = key;

  return !obj.isValid();
});

assert(compareArray(o, a));
assert.sameValue(l, 3);
assert.sameValue(v, 32);
assert.sameValue(k, 2);
assert.sameValue(found, undefined);
