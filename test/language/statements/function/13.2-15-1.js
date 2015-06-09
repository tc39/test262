// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.2-15-1
description: >
    Function Object has length as its own property and does not invoke
    the setter defined on Function.prototype.length (Step 15)
includes: [propertyHelper.js]
---*/

var fun = function (x, y) { };

assert(fun.hasOwnProperty("length"));
assert.sameValue(fun.length, 2);

verifyNotEnumerable(fun, "length");
verifyNotWritable(fun, "length");
verifyConfigurable(fun, "length");
