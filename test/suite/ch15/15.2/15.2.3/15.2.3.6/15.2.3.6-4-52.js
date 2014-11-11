// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-52
description: >
    Object.defineProperty - 'desc' is generic descriptor without any
    attribute, test 'name' is defined in 'obj' with all default
    attribute values (8.12.9 step 4.a.i)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {});

verifyEqualTo(obj, "property", undefined);

verifyNotWritable(obj, "property");

verifyNotEnumerable(obj, "property");

verifyNotConfigurable(obj, "property");

