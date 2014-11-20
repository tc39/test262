// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-95
description: >
    Object.defineProperty will throw TypeError when name.configurable
    = false, name.writable = false, desc.value and name.value are two
    objects which refer to the different objects (8.12.9 step
    10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};

var obj1 = { length: 10 };

Object.defineProperty(obj, "foo", {
    value: obj1,
    writable: false,
    configurable: false 
});

var obj2 = { length: 20 };

try {
    Object.defineProperty(obj, "foo", { value: obj2 });
    $ERROR("Expected an exception.");
} catch (e) {
    verifyEqualTo(obj, "foo", obj1);

    verifyNotWritable(obj, "foo");

    verifyNotEnumerable(obj, "foo");

    verifyNotConfigurable(obj, "foo");

    if (!(e instanceof TypeError)) {
        $ERROR("Expected TypeError, got " + e);
    }

}
