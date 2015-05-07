// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.9-2-a-13
description: Object.freeze - 'P' is own index property of the Object
includes: [propertyHelper.js]
---*/


// default [[Configurable]] attribute value of "0": true
var obj = { 0: 0, 1: 1, length: 2};

Object.freeze(obj);

verifyNotWritable(obj, "0");
verifyNotConfigurable(obj, "0");
