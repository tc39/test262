// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator use ToInteger from deleteCount
esid: sec-array.prototype.splice
description: ToInteger use ToNumber
---*/

var x = [0, 1, 2, 3];
var arr = x.splice(0, {
  valueOf: function() {
    return 3
  },
  toString: function() {
    return 0
  }
});

arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  throw new Test262Error('#1: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr is Array object. Actual: ' + (arr.getClass()));
}

assert.sameValue(arr.length, 3, '#2: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr.length === 3');

assert.sameValue(arr[0], 0, '#3: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[0] === 0');

assert.sameValue(arr[1], 1, '#4: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[1] === 1');

assert.sameValue(arr[2], 2, '#5: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); arr[2] === 2');

assert.sameValue(x.length, 1, '#6: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); x.length === 1');

assert.sameValue(x[0], 3, '#7: var x = [0,1,2,3]; var arr = x.splice(0,{valueOf: function() {return 3}, toString: function() {return 0}}); x[0] === 3');
