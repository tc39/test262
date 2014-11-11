// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-53
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O', test
    [[Get]] of 'name' property is set as undefined if it is absent in
    accessor descriptor 'desc' (8.12.9 step 4.b)
includes: [propertyHelper.js]
---*/

var obj = {};
var setFunc = function (value) {
    obj.setVerifyHelpProp = value;
};

Object.defineProperty(obj, "property", {
    set: setFunc,
    enumerable: true,
    configurable: true
});

verifyWritable(obj, "property", "setVerifyHelpProp");

verifyEnumerable(obj, "property");

verifyConfigurable(obj, "property");
