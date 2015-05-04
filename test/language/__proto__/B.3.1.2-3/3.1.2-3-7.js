// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ on literals"
includes: [runTestCase.js]
---*/

function testcase() {
    var str = "hello string";
    delete str.__proto__;

    var obj = { x: 10 };
    delete obj.__proto__;

    var arr = [1, 2, 3];
    delete arr.__proto__;

    var reg = /regexpexp/;
    delete reg.__proto__;

    return str.__proto__ === String.prototype &&
        obj.__proto__ === Object.prototype &&
        arr.__proto__ === Array.prototype &&
        reg.__proto__ === RegExp.prototype;
}
runTestCase(testcase);
