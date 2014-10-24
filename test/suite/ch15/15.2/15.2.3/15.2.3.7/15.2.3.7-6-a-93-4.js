// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-93-4
description: >
    Object.defineProperties will fail to update [[Value]] attribute of
    indexed data property 'P' when [[Configurable]] attribute of first
    updating property are false  (8.12.9 - step Note & 10.a.ii.1)
includes: [propertyHelper.js]
negative: TypeError
---*/


var obj = {};

Object.defineProperty(obj, "0", {
    value: 1001,
    writable: false,
    configurable: false
});

Object.defineProperty(obj, "1", {
    value: 1003,
    writable: false,
    configurable: true
});

try {
    Object.defineProperties(obj, {
        0: {
            value: 1002
        },
        1: {
            value: 1004
        }
    });

} catch (e) {
    dataPropertyAttributesAreCorrect(obj, "0", 1001, false, false, false);
    dataPropertyAttributesAreCorrect(obj, "1", 1003, false, false, true);
    throw e;
}
