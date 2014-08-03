// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-93-1
description: >
    Object.defineProperties will update [[Value]] attribute of named
    data property 'P' successfully when [[Configurable]] attribute is
    true and [[Writable]] attribute is false but not when both are
    false (8.12.9 - step Note & 10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "property", {
    value: 1001,
    writable: false,
    configurable: true
});

Object.defineProperty(obj, "property1", {
    value: 1003,
    writable: false,
    configurable: false
});

try {
    Object.defineProperties(obj, {
        property: {
            value: 1002
        },
        property1: {
            value: 1004
        }
    });

} catch (e) {
    dataPropertyAttributesAreCorrect(obj, "property", 1002, false, false, true);
    dataPropertyAttributesAreCorrect(obj, "property1", 1003, false, false, false);

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
