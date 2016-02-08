// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-1-4
description: Array.prototype.lastIndexOf applied to Boolean object
---*/

        var obj = new Boolean(false);
        obj.length = 2;
        obj[1] = true;

assert.sameValue(Array.prototype.lastIndexOf.call(obj, true), 1, 'Array.prototype.lastIndexOf.call(obj, true)');
