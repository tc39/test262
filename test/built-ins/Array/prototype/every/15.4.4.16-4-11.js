// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - the exception is not thrown if exception
    was thrown by step 3
---*/

var obj = {
  0: 11,
  1: 12
};

Object.defineProperty(obj, "length", {
  get: function() {
    return {
      toString: function() {
        throw new Test262Error();
      }
    };
  },
  configurable: true
});

assert.throws(Test262Error, function() {
  Array.prototype.every.call(obj, undefined);
});
