// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-271
description: >
    Object.defineProperties -'O' is an Array, 'P' is generic own data
    property of 'O', test TypeError is thrown when updating the
    [[Writable]] attribute value of 'P' which is defined as
    non-configurable (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arr = [];

Object.defineProperty(arr, "property", {
    writable: false
});

try {
    Object.defineProperties(arr, {
        "property": {
            writable: true
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arr, "property", undefined);

    verifyNotWritable(arr, "property");

    verifyNotEnumerable(arr, "property");

    verifyNotConfigurable(arr, "property");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
