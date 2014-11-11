// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-38-1
description: >
    Object.defineProperties - 'P' exists in 'O' is an accessor
    property, test 'P' makes no change if 'desc' is generic descriptor
    without any attribute (8.12.9 step 5)
includes: [propertyHelper.js]
---*/


var obj = {};
var getFunc = function () {
    return 12;
};
Object.defineProperties(obj, {
    foo: {
        get: getFunc,
        enumerable: true,
        configurable: true
    }
});

Object.defineProperties(obj, { foo: {} });

verifyEqualTo(obj, "foo", getFunc());

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
