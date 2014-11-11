// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-110
description: >
    Object.defineProperties - all own properties (data property and
    accessor property)
includes: [propertyHelper.js]
---*/


var obj = {};

function get_func() {
    return 10;
}
function set_func(value) {
    obj.setVerifyHelpProp = value;
}

var properties = {
    foo1: {
        value: 200,
        enumerable: true,
        writable: true,
        configurable: true
    },
    foo2: {
        get: get_func,
        set: set_func,
        enumerable: true,
        configurable: true
    }
};

Object.defineProperties(obj, properties);
verifyEqualTo(obj, "foo1", 200);

verifyWritable(obj, "foo1");

verifyEnumerable(obj, "foo1");

verifyConfigurable(obj, "foo1");
verifyEqualTo(obj, "foo2", get_func());

verifyWritable(obj, "foo2", "setVerifyHelpProp");

verifyEnumerable(obj, "foo2");

verifyConfigurable(obj, "foo2");

