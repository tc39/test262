// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-45
description: >
    Object.defineProperty - 'O' is the global object that uses
    Object's [[GetOwnProperty]] method to access the 'name' property
    (8.12.9 step 1)
includes: [propertyHelper.js, fnGlobalObject.js]
---*/

Object.defineProperty(fnGlobalObject(), "foo", {
    value: 12,
    configurable: true
});

verifyEqualTo(fnGlobalObject(), "foo", 12);

verifyNotWritable(fnGlobalObject(), "foo");

verifyNotEnumerable(fnGlobalObject(), "foo");

verifyConfigurable(fnGlobalObject(), "foo");
