// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-227
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, test TypeError is thrown when the [[Value]] field of
    'desc' and the [[Value]] attribute value of 'name' are two objects
    which refer to two different objects (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

var obj1 = { length: 10 };
Object.defineProperty(arrObj, 0, {
    value: obj1,
    writable: false,
    configurable: false
});

var obj2 = { length: 20 };

try {
    Object.defineProperty(arrObj, "0", { value: obj2 });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(arrObj, "0", obj1);

    verifyNotWritable(arrObj, "0");

    verifyNotEnumerable(arrObj, "0");

    verifyNotConfigurable(arrObj, "0");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
