// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-59
description: >
    Object.defineProperty - 'name' is accessor descriptor and every
    fields in 'desc' is absent (8.12.9 step 5)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc() {
    return 0;
}
function setFunc(value) {
    obj.helpVerifySet = value;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc
});

Object.defineProperty(obj, "foo", {});
verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "helpVerifySet");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
