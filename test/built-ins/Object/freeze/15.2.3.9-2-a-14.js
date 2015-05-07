// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-a-14
description: >
    Object.freeze - 'P' is own index property of an Array object that
    uses Object's [[GetOwnProperty]]
includes: [propertyHelper.js]
---*/

// default [[Configurable]] attribute value of "0": true
var arrObj = [0, 1, 2];

Object.freeze(arrObj);

verifyNotWritable(arrObj, "0");
verifyNotConfigurable(arrObj, "0");
assert.sameValue(arrObj[0], 0);
