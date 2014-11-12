// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-250
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' is data property and 'desc' is data
    descriptor, and the [[Configurable]] attribute value of 'name' is
    false, test TypeError is thrown if the [[Writable]] attribute
    value of 'name' is false, and the [[Value]] field of 'desc' and
    the [[Value]] attribute value of 'name' are two booleans with
    different values (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

Object.defineProperty(arrObj, "1", {
    value: false
});

try {
    Object.defineProperty(arrObj, "1", {
        value: true
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arrObj, "1", false);

    verifyNotWritable(arrObj, "1");

    verifyNotEnumerable(arrObj, "1");

    verifyNotConfigurable(arrObj, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
