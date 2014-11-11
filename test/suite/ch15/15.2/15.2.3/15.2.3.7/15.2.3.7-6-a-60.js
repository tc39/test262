// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-60
description: >
    Object.defineProperties - desc.[[Set]] and P.[[Set]] are two
    objects which refer to the different objects (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

function set_func1() {}

Object.defineProperty(obj, "foo", {
    set: set_func1,
    configurable: true
});

function set_func2(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperties(obj, {
    foo: {
        set: set_func2
    }
});
verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
