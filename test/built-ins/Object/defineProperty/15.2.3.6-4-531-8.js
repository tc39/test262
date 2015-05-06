// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-531-8
description: >
    ES5 Attributes - Updating a named accessor property 'P' without
    [[Set]] using simple assignment is failed, 'O' is the global
    object (8.12.5 step 5.b)
includes:
    - propertyHelper.js
    - fnGlobalObject.js
---*/

var obj = fnGlobalObject();
try {
    obj.verifySetFunc = "data";
    var getFunc = function () {
        return obj.verifySetFunc;
    };

    Object.defineProperty(obj, "prop", {
        get: getFunc,
        enumerable: true,
        configurable: true
    });

    assert(obj.hasOwnProperty("prop"));
    var desc = Object.getOwnPropertyDescriptor(obj, "prop");

    verifyNotWritable(obj, "prop");
    assert.sameValue(typeof desc.set, "undefined");
    assert.sameValue(obj.prop, "data");
} finally {
    delete obj.prop;
    delete obj.verifySetFunc;
}
