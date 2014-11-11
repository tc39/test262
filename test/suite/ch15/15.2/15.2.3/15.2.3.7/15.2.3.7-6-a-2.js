// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-2
description: >
    Object.defineProperties - 'P' is inherited data property (8.12.9
    step 1 )
includes: [propertyHelper.js]
---*/

var proto = {};
Object.defineProperty(proto, "prop", {
    value: 11,
    configurable: false
});
var Con = function () { };
Con.prototype = proto;

var obj = new Con();

Object.defineProperties(obj, {
    prop: {
        value: 12,
        configurable: true
    }
});

verifyEqualTo(obj, "prop", 12);

verifyNotWritable(obj, "prop");

verifyNotEnumerable(obj, "prop");

verifyConfigurable(obj, "prop");

