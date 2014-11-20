// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-86
description: >
    Object.defineProperty will throw TypeError when name.configurable
    = false, name.writable = false, desc.value = +0 and name.value =
    -0 (8.12.9 step 10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", { 
    value: -0, 
    writable: false, 
    configurable: false 
});

try {
    Object.defineProperty(obj, "foo", { value: +0 });
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
