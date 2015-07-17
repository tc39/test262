// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-278
description: >
    Object.create - 'set' property of one property in 'Properties' is
    an inherited accessor property without a get function (8.10.5 step
    8.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "set", {
            set: function () { }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var child = new ConstructFun();

        var newObj = Object.create({}, {
            prop: child
        });

        var desc = Object.getOwnPropertyDescriptor(newObj, "prop");

        return newObj.hasOwnProperty("prop") && typeof desc.set === "undefined";
    }
runTestCase(testcase);
