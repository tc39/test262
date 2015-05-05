// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on instances of basic built-in types"
includes: [runTestCase.js]
---*/

function testcase() {
    return (new Object()).__proto__ == Object.prototype &&
        (new String()).__proto__ == String.prototype &&
        (new Number()).__proto__ == Number.prototype &&
        (new Function()).__proto__ == Function.prototype &&
        (new Array()).__proto__ == Array.prototype &&
        (new RegExp()).__proto__ == RegExp.prototype &&
        (new Error()).__proto__ == Error.prototype &&
        (new Boolean()).__proto__ == Boolean.prototype &&
        (new Date()).__proto__ == Date.prototype;

}
runTestCase(testcase);
