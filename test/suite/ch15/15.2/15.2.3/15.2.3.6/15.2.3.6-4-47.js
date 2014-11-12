// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-47
description: >
    Object.defineProperty - 'name' property doesn't exist in 'O',
    [[Value]] of 'name' property is set as undefined if it is absent
    in data descriptor 'desc' (8.12.9 step 4.a.i)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
    writable: true,
    enumerable: true,
    configurable: false
});

verifyEqualTo(obj, "property", undefined);

verifyWritable(obj, "property");

verifyEnumerable(obj, "property");

verifyNotConfigurable(obj, "property");

