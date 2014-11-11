// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-233
description: >
    Object.defineProperty - 'O' is an Array, 'name' is an array index
    property, the [[Set]] field of 'desc' and the [[Set]] attribute
    value of 'name' are two objects which refer to the different
    objects (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/

var arrObj = [];

function setFunc1() { }

Object.defineProperty(arrObj, "0", {
    set: setFunc1,
    configurable: true
});

function setFunc2(value) {
    arrObj.setVerifyHelpProp = value;
}

Object.defineProperty(arrObj, "0", { set: setFunc2 });
verifyWritable(arrObj, "0", "setVerifyHelpProp");

verifyNotEnumerable(arrObj, "0");

verifyConfigurable(arrObj, "0");
