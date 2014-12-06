// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-108
description: >
    Object.defineProperty - 'name' and 'desc' are accessor
    properties,  name.[[Get]] is present and desc.[[Get]] is undefined
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
    enumerable: true,
    configurable: true
});

Object.defineProperty(obj, "foo", {
    set: setFunc,
    get: undefined
});
verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
