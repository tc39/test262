// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-a-7
description: >
    Object.freeze - 'P' is own named property of an Arguments object
    that implements its own [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

var argObj = (function () { return arguments; }());

argObj.foo = 10; // default [[Configurable]] attribute value of foo: true

Object.freeze(argObj);

verifyNotWritable(argObj, "foo");
verifyNotConfigurable(argObj, "foo");
assert.sameValue(argObj.foo, 10);
