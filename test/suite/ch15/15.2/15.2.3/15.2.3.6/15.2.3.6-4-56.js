// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-56
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O', test
    [[Configurable]] of 'name' property is set as false if it is
    absent in accessor descriptor 'desc' (8.12.9 step 4.b.i)
includes: [propertyHelper.js]
---*/

var obj = {};
var setFunc = function (value) {
    obj.setVerifyHelpProp = value;
};
var getFunc = function () {
    return 10;
};

Object.defineProperty(obj, "property", {
    set: setFunc,
    get: getFunc,
    enumerable: true
});
verifyEqualTo(obj, "property", getFunc());

verifyWritable(obj, "property", "setVerifyHelpProp");

verifyEnumerable(obj, "property");

verifyNotConfigurable(obj, "property");
