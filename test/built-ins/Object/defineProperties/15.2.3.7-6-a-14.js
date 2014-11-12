// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-14
description: >
    Object.defineProperties - 'O' is a String object which implements
    its own [[GetOwnProperty]] method to get 'P' (8.12.9 step 1 )
includes: [propertyHelper.js]
---*/

var str = new String();

Object.defineProperty(str, "prop", {
    value: 11,
    configurable: false
});

try {
    Object.defineProperties(str, {
        prop: {
            value: 12,
            configurable: true
        }
    });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(str, "prop", 11);

    verifyNotWritable(str, "prop");

    verifyNotEnumerable(str, "prop");

    verifyNotConfigurable(str, "prop");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
