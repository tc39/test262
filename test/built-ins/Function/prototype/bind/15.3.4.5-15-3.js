// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5-15-3
description: >
    Function.prototype.bind - The [[Writable]] attribute of length
    property in F set as false
includes: [propertyHelper.js]
---*/

function foo() { }
var obj = foo.bind({});
var flength = obj.length;

assert(obj.hasOwnProperty("length"));
verifyNotWritable(obj, "length", null, 100);
assert.sameValue(obj.length, flength);
