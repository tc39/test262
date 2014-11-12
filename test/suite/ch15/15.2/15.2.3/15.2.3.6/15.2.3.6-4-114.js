// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-114
description: >
    Object.defineProperty - 'name' and 'desc' are accessor properties,
    name.configurable = true and desc.configurable = false (8.12.9
    step 12)
includes: [propertyHelper.js]
---*/


var obj = {};

function setFunc(value) {
    obj.setVerifyHelpProp = value;
}

function getFunc() {
    return 10;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    get: getFunc,
    configurable: false
});
verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
