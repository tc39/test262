// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-c-iii-4
description: >
    Array.prototype.map - value of returned array element can be
    enumerated
---*/

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = { 0: 11, length: 2 };
        var newArr = Array.prototype.map.call(obj, callbackfn);

        var prop;
        var enumerable = false;
        for (prop in newArr) {
            if (newArr.hasOwnProperty(prop)) {
                if (prop === "0") {
                    enumerable = true;
                }
            }
        }

assert(enumerable, 'enumerable !== true');
