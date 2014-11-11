// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-38
description: >
    Object.defineProperty - 'O' is the Math object that uses Object's
    [[GetOwnProperty]] method to access the 'name' property (8.12.9
    step 1)
includes: [propertyHelper.js]
---*/

try {
    Object.defineProperty(Math, "foo", {
        value: 12,
        configurable: true
    });
    
    verifyEqualTo(Math, "foo", 12);

    verifyNotWritable(Math, "foo");

    verifyNotEnumerable(Math, "foo");

    verifyConfigurable(Math, "foo");
} finally {
    delete Math.foo;
}

