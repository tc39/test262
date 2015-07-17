// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-145
description: >
    Object.defineProperties - 'writable' property of 'descObj' is
    inherited accessor property (8.10.5 step 6.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var proto = {};

        Object.defineProperty(proto, "writable", {
            get: function () {
                return true;
            }
        });

        var Con = function () { };
        Con.prototype = proto;

        var descObj = new Con();

        Object.defineProperties(obj, {
            property: descObj
        });

        obj.property = "isWritable";

        return obj.hasOwnProperty("property") && obj.property === "isWritable";
    }
runTestCase(testcase);
