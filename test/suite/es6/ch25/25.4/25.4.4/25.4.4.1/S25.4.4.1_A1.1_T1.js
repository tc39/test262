// Copyright 2014 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: Promise.all is callable
es5id: 25.4.4.1_A1.1_T1
author: Sam Mikes
---*/

// CHECK#1
var x = typeof Promise.all;
if (x !== "function") {
    $ERROR('#1: x = typeof Promise.all; x === "function". Actual: ' + (x));
}
