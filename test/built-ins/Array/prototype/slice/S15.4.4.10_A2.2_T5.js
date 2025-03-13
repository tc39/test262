// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from end
esid: sec-array.prototype.slice
description: ToInteger use ToNumber
---*/

var x = [0, 1, 2, 3, 4];
var arr = x.slice(0, {
  valueOf: function() {
    return 3
  },
  toString: function() {
    return 0
  }
});

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 3, '#2: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr.length === 3');

assert.sameValue(arr[0], 0, '#3: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[0] === 0');

assert.sameValue(arr[1], 1, '#4: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[1] === 1');

assert.sameValue(arr[2], 2, '#5: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[2] === 2');

assert.sameValue(arr[3], undefined, '#6: var x = [0,1,2,3,4]; var arr = x.slice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[3] === undefined');
