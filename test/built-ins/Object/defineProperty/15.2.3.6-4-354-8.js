// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-354-8
description: >
    ES5 Attributes - property 'P' with attributes [[Writable]]: false,
    [[Enumerable]]: true, [[Configurable]]: true is non-writable using
    simple assignment, 'O' is the global object
includes:
    - propertyHelper.js
    - fnGlobalObject.js
---*/

var obj = fnGlobalObject();
try {
    Object.defineProperty(obj, "prop", {
        value: 2010,
        writable: false,
        enumerable: true,
        configurable: true
    });

    assert.sameValue(obj.prop, 2010);
    verifyNotWritable(obj, "prop");
    assert.sameValue(obj.prop, 2010);
} finally {
    delete obj.prop;
}

