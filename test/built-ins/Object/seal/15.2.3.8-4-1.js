// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.8-4-1
description: Object.seal - 'O' is sealed already
---*/

        var obj = {};

        obj.foo = 10; // default value of attributes: writable: true, configurable: true, enumerable: true
        var preCheck = Object.isExtensible(obj);
        Object.seal(obj);

        Object.seal(obj);

assert(preCheck, 'preCheck !== true');
assert(Object.isSealed(obj), 'Object.isSealed(obj) !== true');
