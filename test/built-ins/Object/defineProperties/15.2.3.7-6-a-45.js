// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-45
description: >
    Object.defineProperties - desc.value is +0 and P.value is -0
    (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

var desc = { value: -0 };
Object.defineProperty(obj, "foo", desc);

try {
    Object.defineProperties(obj, {
        foo: {
            value: +0
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(obj, "foo", -0);

    verifyNotWritable(obj, "foo");

    verifyNotEnumerable(obj, "foo");

    verifyNotConfigurable(obj, "foo");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
