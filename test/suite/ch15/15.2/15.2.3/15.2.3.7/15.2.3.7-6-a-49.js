// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-49
description: >
    Object.defineProperties - both desc.value and P.value are two
    strings which have same length and same characters in
    corresponding positions (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

var desc = { value: "abcd" };
Object.defineProperty(obj, "foo", desc);

Object.defineProperties(obj, {
    foo: {
        value: "abcd"
    }
});
verifyEqualTo(obj, "foo", "abcd");

verifyNotWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
