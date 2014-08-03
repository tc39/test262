// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-38
description: >
    Object.defineProperties - 'P' exists in 'O', test 'P' makes no
    change if 'desc' is generic descriptor without any attribute
    (8.12.9 step 5)
includes: [propertyHelper.js]
---*/


var obj = {};
obj.foo = 100; // default value of attributes: writable: true, configurable: true, enumerable: true

Object.defineProperties(obj, { foo: {} });
verifyEqualTo(obj, "foo", 100);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
