// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
es5id: 15.4.4.19-3-5
description: Array.prototype.map - value of 'length' is a number (value is -0)
---*/

        function callbackfn(val, idx, obj) {
            return val > 10;
        }

        var obj = { 0: 11, length: -0 };

        var newArr = Array.prototype.map.call(obj, callbackfn);

assert.sameValue(newArr.length, 0, 'newArr.length');
