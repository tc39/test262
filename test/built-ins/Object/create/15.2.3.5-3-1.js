// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    create sets the [[Prototype]] of the created object to first parameter.
    This can be checked using isPrototypeOf, or getPrototypeOf.
es5id: 15.2.3.5-3-1
description: Object.create sets the prototype of the passed-in object
includes: [runTestCase.js]
---*/

function testcase() {
    function base() {}
    var b = new base();
    var d = Object.create(b);

    if (Object.getPrototypeOf(d) === b &&
        b.isPrototypeOf(d) === true) {
      return true;
    }
 }
runTestCase(testcase);
