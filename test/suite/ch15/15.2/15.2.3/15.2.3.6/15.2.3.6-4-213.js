// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-213
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    named property, 'name' makes no change if the value of every field
    in 'desc' is the same value as the corresponding field in
    'name'(desc is accessor property) (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];
var getFunc = function () {
    return "100";
};
var setFunc = function (value) {
    arrObj.setVerifyHelpProp = value;
};

var desc = {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
};

Object.defineProperty(arrObj, "0", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
});

Object.defineProperty(arrObj, "0", desc);

verifyEqualTo(arrObj, "0", getFunc());

verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
