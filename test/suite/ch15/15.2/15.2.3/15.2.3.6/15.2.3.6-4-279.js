// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-279
description: >
    Object.defineProperty - 'O' is an Array, 'name' is generic own
    accessor property of 'O', and 'desc' is accessor descriptor, test
    updating multiple attribute values of 'name' (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

function getFunc() {
    return 12;
}
function setFunc(value) {
    arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
    get: function () {
        return 24;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(arrObj, "property", {
    get: getFunc,
    set: setFunc,
    enumerable: false,
    configurable: false
});

verifyEqualTo(arrObj, "property", getFunc());

verifyWritable(arrObj, "property", "setVerifyHelpProp");

verifyNotEnumerable(arrObj, "property");

verifyNotConfigurable(arrObj, "property");
