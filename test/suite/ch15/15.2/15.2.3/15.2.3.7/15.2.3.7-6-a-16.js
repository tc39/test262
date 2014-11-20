// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-16
description: >
    Object.defineProperties - 'O' is a Number object which implements
    its own [[GetOwnProperty]] method to get 'P' (8.12.9 step 1 )
includes: [propertyHelper.js]
---*/


var obj = new Number(-9);

Object.defineProperty(obj, "prop", {
    value: 11,
    configurable: false
});

try {
    Object.defineProperties(obj, {
        prop: {
            value: 12,
            configurable: true
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(obj, "prop", 11);

    verifyNotWritable(obj, "prop");

    verifyNotEnumerable(obj, "prop");

    verifyNotConfigurable(obj, "prop");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
