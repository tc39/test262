// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-109
description: >
    Object.defineProperty - 'name' and 'desc' are accessor properties,
    name.[[Get]] is undefined and desc.[[Get]] is function (8.12.9
    step 12)
includes: [propertyHelper.js]
---*/

var obj = {};

function setFunc(value) {
    obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", {
    set: setFunc,
    get: undefined,
    enumerable: true,
    configurable: true
});

function getFunc() {
    return 10;
}

Object.defineProperty(obj, "foo", {
    get: getFunc
});
verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
