// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-73
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    present (8.10.5 step 4)
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "property", {
    configurable: false
});

assert(obj.hasOwnProperty("property"));
verifyNotConfigurable(obj, "property");
