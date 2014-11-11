// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-b-2
description: >
    Object.seal - the [[Configurable]] attribute of own accessor
    property of 'O' is set from true to false and other attributes of
    the property are unaltered
includes: [propertyHelper.js]
---*/

var obj = {};
obj.variableForHelpVerify = "data";

function setFunc(value) {
    obj.variableForHelpVerify = value;
}
function getFunc() {
    return 10;
}
Object.defineProperty(obj, "foo", {
    get: getFunc,
    set: setFunc,
    enumerable: true,
    configurable: true
});
var preCheck = Object.isExtensible(obj);
Object.seal(obj);

if (!preCheck) {
    $ERROR('Expected preCheck to be true, actually ' + preCheck);
}

verifyEqualTo(obj, "foo", getFunc());

verifyWritable(obj, "foo", "variableForHelpVerify");

verifyEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
