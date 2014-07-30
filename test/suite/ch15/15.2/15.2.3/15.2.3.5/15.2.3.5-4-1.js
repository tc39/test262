// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    create sets the [[Prototype]] of the created object to first parameter.
    This can be checked using isPrototypeOf, or getPrototypeOf.
es5id: 15.2.3.5-4-1
description: >
    Object.create sets the prototype of the passed-in object and adds
    new properties
includes: [runTestCase.js]
---*/

function testcase() {
    function base() {}
    var b = new base();
    var prop = new Object();
    var d = Object.create(b,{ "x": {value: true,writable: false},
                              "y": {value: "str",writable: false} });

    if (Object.getPrototypeOf(d) === b &&
        b.isPrototypeOf(d) === true &&
        d.x === true &&
        d.y === "str" &&
        b.x === undefined &&
        b.y === undefined) {
      return true;
    }
 }
runTestCase(testcase);
