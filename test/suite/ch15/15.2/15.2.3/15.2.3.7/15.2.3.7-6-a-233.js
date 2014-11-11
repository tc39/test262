// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-233
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    property, 'P' is data property and 'desc' is data descriptor, and
    the [[Configurable]] attribute value of 'P' is false, test
    TypeError is thrown if the [[Writable]] attribute value of 'P' is
    false and the [[Writable]] field of 'desc' is true.  (15.4.5.1
    step 4.c)
includes: [propertyHelper.js]
---*/


var arr = [];

Object.defineProperty(arr, "1", {
    configurable: false,
    writable: false

});

try {
    Object.defineProperties(arr, {
        "1": {
            writable: true
        }
    });
} catch (e) {
    verifyEqualTo(arr, "1", undefined);

    verifyNotWritable(arr, "1");

    verifyNotEnumerable(arr, "1");

    verifyNotConfigurable(arr, "1");

    if (!(e instanceof TypeError)) {
        $ERROR("Epected TypeError, got " + e);
    }

}
