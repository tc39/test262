// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-70
description: >
    Object.defineProperties - 'P' is accessor property and
    P.configurable is true, 'desc' in 'Properties' is data property
    (8.12.9 step 9.c.i)
includes: [propertyHelper.js]
---*/


var obj = {};

function get_func() {
    return 10;
}

Object.defineProperty(obj, "foo", {
    get: get_func,
    configurable: true
});

Object.defineProperties(obj, {
    foo: {
        value: 12
    }
});
verifyEqualTo(obj, "foo", 12);

verifyNotWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
