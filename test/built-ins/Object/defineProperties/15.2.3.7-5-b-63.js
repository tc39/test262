// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-63
description: >
    Object.defineProperties - 'configurable' property of 'descObj' is
    own data property that overrides an inherited data property
    (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/


var obj = {};
var proto = {
    configurable: true
};

var Con = function () { };
Con.prototype = proto;
var descObj = new Con();

Object.defineProperty(descObj, "configurable", {
    value: false
});

Object.defineProperties(obj, {
    prop: descObj
});

assert(obj.hasOwnProperty("prop"));
verifyNotConfigurable(obj, "prop");
