// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-5-11
description: >
    Array.prototype.reduce - if the exception occurs, it occurs after
    any side-effects that might be produced by step 3
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return (curVal > 10);
        }

        var obj = { 0: 11, 1: 12 };

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                return {
                    toString: function () {
                        accessed = true;
                        return "0";
                    }
                };
            },
            configurable: true
        });
assert.throws(TypeError, function() {
            Array.prototype.reduce.call(obj, callbackfn);
});
assert(accessed, 'accessed !== true');
