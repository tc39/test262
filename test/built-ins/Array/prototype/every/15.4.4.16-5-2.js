// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - thisArg is Object
---*/

var res = false;
var o = new Object();
o.res = true;

function callbackfn(val, idx, obj)
{
  return this.res;
}

var arr = [1];

assert.sameValue(arr.every(callbackfn, o), true, 'arr.every(callbackfn, o)');
