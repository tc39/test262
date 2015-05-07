// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-a-8
description: >
    Object.freeze - 'P' is own named property of the String object
    that implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var strObj = new String("abc");

strObj.foo = 10; // default [[Configurable]] attribute value of foo: true

Object.freeze(strObj);

verifyNotWritable(strObj, "foo");
verifyNotConfigurable(strObj, "foo");
assert.sameValue(strObj.foo, 10);
