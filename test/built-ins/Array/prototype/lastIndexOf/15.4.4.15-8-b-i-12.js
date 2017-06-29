// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.lastindexof
es5id: 15.4.4.15-8-b-i-12
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property that overrides an inherited data property on an
    Array-like object
---*/

        var obj = { length: 1 };

            Object.prototype[0] = false;
            Object.defineProperty(obj, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

assert.sameValue(Array.prototype.lastIndexOf.call(obj, true), 0, 'Array.prototype.lastIndexOf.call(obj, true)');
