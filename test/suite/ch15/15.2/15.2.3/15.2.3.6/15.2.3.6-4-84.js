// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-84
description: >
    Object.defineProperty will not throw TypeError if
    name.configurable = false, name.writable = false, name.value =
    null and desc.value = null (8.12.9 step 10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", { 
    value: null, 
    writable: false, 
    configurable: false 
});

Object.defineProperty(obj, "foo", { 
    value: null,  
    writable: false, 
    configurable: false 
});
verifyEqualTo(obj, "foo", null);

verifyNotWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
