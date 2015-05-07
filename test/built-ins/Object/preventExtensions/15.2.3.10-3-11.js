// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.10-3-11
description: >
    Object.preventExtensions - indexed properties cannot be added into
    an Arguments object
includes: [propertyHelper.js]
---*/

var argObj;
(function () {
    argObj = arguments;
}());

assert(Object.isExtensible(argObj));
Object.preventExtensions(argObj);
assert(!Object.isExtensible(argObj));

verifyNotWritable(argObj, "0", "nocheck");

assert(!argObj.hasOwnProperty("0"));
