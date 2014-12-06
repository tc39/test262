// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-354-13
description: >
    Object.defineProperty will update [[Value]] attribute of indexed
    property successfully when [[Configurable]] attribute is true and
    [[Writable]] attribute is false, 'O' is the global object (8.12.9
    - step Note)
includes: [propertyHelper.js, fnGlobalObject.js]
---*/


var obj = fnGlobalObject();

try {
    Object.defineProperty(obj, "0", {
        value: 1001,
        writable: false,
        configurable: true
    });

    Object.defineProperty(obj, "0", {
        value: 1002
    });

    verifyEqualTo(obj, "0", 1002);

    verifyNotWritable(obj, "0");

    verifyNotEnumerable(obj, "0");

    verifyConfigurable(obj, "0");
} finally {
    delete obj[0];
}

