// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-2-19
description: >
    Array.prototype.indexOf applied to Function object which
    implements its own property get method
---*/

        var obj = function (a, b) {
            return a + b;
        };
        obj[1] = "b";
        obj[2] = "c";

assert.sameValue(Array.prototype.indexOf.call(obj, obj[1]), 1, 'Array.prototype.indexOf.call(obj, obj[1])');
assert.sameValue(Array.prototype.indexOf.call(obj, obj[2]), -1, 'Array.prototype.indexOf.call(obj, obj[2])');
