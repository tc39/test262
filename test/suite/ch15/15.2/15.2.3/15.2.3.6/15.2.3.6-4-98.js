// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-98
description: >
    Object.defineProperty will not throw TypeError when
    name.configurable = false, both desc.[[Get]] and name.[[Get]] are
    two objects which refer to the same object (8.12.9 step 11.a.ii)
includes: [propertyHelper.js]
---*/


var obj = {};

function getFunc() {
    return 10;
}
function setFunc(value) {
    obj.verifyGetHelpMethod = value;
}

Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc,
    configurable: false
});

Object.defineProperty(obj, "foo", { get: getFunc });

verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "verifyGetHelpMethod");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
