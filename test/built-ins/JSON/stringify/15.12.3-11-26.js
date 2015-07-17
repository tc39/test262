// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-26
description: >
    JSON.stringify - the last element of the concatenation is ']' (The
    abstract operation JA(value) step 10.b.iii)
includes: [runTestCase.js]
---*/

function testcase() {
        var arrObj = [];
        arrObj[0] = "a";
        arrObj[1] = "b";
        arrObj[2] = "c";

        var jsonText = JSON.stringify(arrObj, undefined, "").toString();
        return jsonText.charAt(jsonText.length - 1) === "]";
    }
runTestCase(testcase);
