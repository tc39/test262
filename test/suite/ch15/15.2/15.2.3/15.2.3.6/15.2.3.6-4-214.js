// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-214
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property and its configurable and writable attributes are set to
    false, test TypeError is thrown when the type of the [[Value]]
    field of 'desc' is different from the type of the [[Value]]
    attribute value of 'name' (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
negative: TypeError
---*/

var arrObj = [];

Object.defineProperty(arrObj, 0, {
    value: 101,
    writable: false,
    configurable: false
});

try {
    Object.defineProperty(arrObj, "0", { value: "abc" });
} catch (e) {
    dataPropertyAttributesAreCorrect(arrObj, "0", 101, false, false, false);
    throw e;
}
