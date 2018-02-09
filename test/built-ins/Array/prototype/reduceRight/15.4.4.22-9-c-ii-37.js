// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduceright
es5id: 15.4.4.22-9-c-ii-37
description: >
    Array.prototype.reduceRight - the global object can be used as
    accumulator
---*/

var global = this;
        var accessed = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return prevVal === global;
        }

        var obj = { 0: 11, length: 1 };

assert.sameValue(Array.prototype.reduceRight.call(obj, callbackfn, this), true, 'Array.prototype.reduceRight.call(obj, callbackfn, this)');
assert(accessed, 'accessed !== true');
