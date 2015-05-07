// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-470
description: >
    ES5 Attributes - property ([[Get]] is undefined, [[Set]] is a
    Function, [[Enumerable]] is true, [[Configurable]] is false) is
    undeletable
includes: [propertyHelper.js]
---*/

var obj = {};

var verifySetFunc = "data";
var setFunc = function (value) {
    verifySetFunc = value;
};

Object.defineProperty(obj, "prop", {
    get: undefined,
    set: setFunc,
    enumerable: true,
    configurable: false
});

assert(obj.hasOwnProperty("prop"));

var desc = Object.getOwnPropertyDescriptor(obj, "prop");

verifyNotWritable(obj, "prop");
verifyNotConfigurable(obj, "prop");

assert.sameValue(desc.configurable, false);

assert(obj.hasOwnProperty("prop"));
