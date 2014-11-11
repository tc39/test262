// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-99
description: >
    Object.defineProperties - 'P' is data property, P.configurable is
    true and properties.configurable is false
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", { 
    value: 200, 
    enumerable: true, 
    writable: true, 
    configurable: true 
});

Object.defineProperties(obj, {
    foo: {
        configurable: false
    }
});
verifyEqualTo(obj, "foo", 200);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
