// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-24gs
description: >
    Strict - checking 'this' from a global scope (New'ed object from
    FunctionExpression includes strict directive prologue)
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/

var f = function () {
    "use strict";
    return this;
}
if (((new f()) === fnGlobalObject()) || (typeof (new f()) === "undefined")) {
    throw "'this' had incorrect value!";
}
