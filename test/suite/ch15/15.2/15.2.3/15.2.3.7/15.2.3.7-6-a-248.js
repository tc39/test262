// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-248
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property that already exists on 'O' is data property and
    'desc' is data descriptor, test setting the [[Value]] attribute
    value of 'P' as undefined  (15.4.5.1 step 4.c)
includes: [propertyHelper.js]
---*/


var arr = [12];

Object.defineProperties(arr, {
    "0": {
        value: undefined
    }
});
verifyEqualTo(arr, "0", undefined);

verifyWritable(arr, "0");

verifyEnumerable(arr, "0");

verifyConfigurable(arr, "0");
