// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-22
description: >
    Object.create -  own enumerable data property that overrides an
    enumerable inherited data property in 'Properties' is defined in
    'obj' (15.2.3.7 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = {};
        proto.prop = {
            value: "abc"
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        child.prop = {
            value: "bbq"
        };
        var newObj = Object.create({}, child);

        return newObj.hasOwnProperty("prop") && newObj.prop === "bbq";
    }
runTestCase(testcase);
