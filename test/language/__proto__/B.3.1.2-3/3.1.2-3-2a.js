// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ on built-in prototype objects"
includes: [runTestCase.js]
---*/

function testcase() {

    delete String.prototype.__proto__;
    delete Number.prototype.__proto__;
    delete Boolean.prototype.__proto__;
    delete Function.prototype.__proto__;
    delete Error.prototype.__proto__;
    delete Array.prototype.__proto__;
    delete Date.prototype.__proto__;
    delete RegExp.prototype.__proto__;

    return String.prototype.__proto__ === Object.prototype &&
        Number.prototype.__proto__ === Object.prototype &&
        Boolean.prototype.__proto__ === Object.prototype &&
        Function.prototype.__proto__ === Object.prototype &&
        Error.prototype.__proto__ === Object.prototype &&
        Array.prototype.__proto__ === Object.prototype &&
        Date.prototype.__proto__ === Object.prototype &&
        RegExp.prototype.__proto__ === Object.prototype;
}
runTestCase(testcase);
