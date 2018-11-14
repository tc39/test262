// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
es5id: 15.4.4.19-8-c-i-17
description: >
    Array.prototype.map - element to be retrieved is own accessor
    property without a get function on an Array-like object
---*/

function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return typeof val === "undefined";
  }
  return false;
}

var obj = {
  length: 2
};

Object.defineProperty(obj, "1", {
  set: function() {},
  configurable: true
});

var testResult = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(testResult[1], true, 'testResult[1]');
