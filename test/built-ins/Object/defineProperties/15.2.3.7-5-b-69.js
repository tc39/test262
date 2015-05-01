// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-69
description: >
    Object.defineProperties - 'configurable' property of 'descObj' is
    own accessor property without a get function (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var descObj = {};
Object.defineProperty(descObj, "configurable", {
    set: function () { }
});

Object.defineProperties(obj, {
    prop: descObj
});

assert(obj.hasOwnProperty("prop"));
verifyNotConfigurable(obj, "prop");
