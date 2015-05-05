// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ on instances of basic built-in type objects"
includes: [runTestCase.js]
---*/

function testcase() {

    var obj = new Object();
    delete obj.__proto__;

    var str = new String();
    delete str.__proto__;

    var num = new Number();
    delete num.__proto__;

    var fun = new Function();
    delete fun.__proto__;

    var arr = new Array();
    delete arr.__proto__;

    var reg = new RegExp(/string/);
    delete reg.__proto__;

    var err = new Error();
    delete err.__proto__;

    var bool = new Boolean();
    delete bool.__proto__;

    var date = new Date();
    delete date.__proto__;

    return obj.__proto__ == Object.prototype &&
        str.__proto__ == String.prototype &&
        num.__proto__ == Number.prototype &&
        fun.__proto__ == Function.prototype &&
        arr.__proto__ == Array.prototype &&
        reg.__proto__ == RegExp.prototype &&
        err.__proto__ == Error.prototype &&
        bool.__proto__ == Boolean.prototype &&
        date.__proto__ == Date.prototype;
}
runTestCase(testcase);
