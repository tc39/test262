// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-107
description: >
    Object.defineProperty - 'name' and 'desc' are accessor properties,
    both desc.[[Get]] and name.[[Get]] are two different values
    (8.12.9 step 12)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc() {
    return 10;
}

function setFunc(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc,
    configurable: true
});

function getFunc2() {
    return 20;
}

Object.defineProperty(obj, "foo", {
    get: getFunc2
});
verifyEqualTo(obj, "foo", getFunc2());

verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyNotEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
