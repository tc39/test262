// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ on built-in function constructor objects"
includes: [runTestCase.js]
---*/

function testcase() {

    delete String.__proto__;
    delete Number.__proto__;
    delete Boolean.__proto__;
    delete Function.__proto__;
    delete Error.__proto__;
    delete Array.__proto__;
    delete Date.__proto__;
    delete RegExp.__proto__;

    return Object.__proto__ === Function.prototype &&
        String.__proto__ === Function.prototype &&
        Number.__proto__ === Function.prototype &&
        Boolean.__proto__ === Function.prototype &&
        Function.__proto__ === Function.prototype &&
        Error.__proto__ === Function.prototype &&
        Array.__proto__ === Function.prototype &&
        Date.__proto__ === Function.prototype &&
        RegExp.__proto__ === Function.prototype;
}
runTestCase(testcase);
