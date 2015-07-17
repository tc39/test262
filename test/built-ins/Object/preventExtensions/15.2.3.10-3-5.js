// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.10-3-5
description: >
    Object.preventExtensions - indexed properties cannot be added into
    a String object
includes: [runTestCase.js]
---*/

function testcase() {
        var strObj = new String();
        var preCheck = Object.isExtensible(strObj);
        Object.preventExtensions(strObj);
        try {
            Object.defineProperty(strObj, "0", { value: "c" });
            return false;
        } catch (e) {
            return e instanceof TypeError && preCheck &&
                !strObj.hasOwnProperty("0") && typeof strObj[0] === "undefined";
        }
    }
runTestCase(testcase);
