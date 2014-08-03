// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-b-1
description: >
    Object.seal - the [[Configurable]] attribute of own data property
    of 'O' is set from true to false and other attributes of the
    property are unaltered
includes: [propertyHelper.js]
---*/

var obj = {};

Object.defineProperty(obj, "foo", {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true
});
var preCheck = Object.isExtensible(obj);
Object.seal(obj);

if (!preCheck) {
    $ERROR('Expected preCheck to be true, actually ' + preCheck);
}

verifyEqualTo(obj, "foo", 10);

verifyWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
