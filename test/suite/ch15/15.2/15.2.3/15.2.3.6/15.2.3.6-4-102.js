// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-102
description: >
    Object.defineProperty - 'name' and 'desc' are data properties,
    desc.value is present and name.value is undefined (8.12.9 step 12)
includes: [propertyHelper.js]
---*/

var obj = {};

obj.foo = undefined; // default value of attributes: writable: true, configurable: true, enumerable: true

Object.defineProperty(obj, "foo", { value: 100 });
verifyEqualTo(obj, "foo", 100);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");

