// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Object.prototype.__proto__ is accessrot property with
    {writable:undefined, enumerable:false, configurable:true, getter &
    setter } attributes
includes: [runTestCase.js]
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    return  desc.writable === undefined &&
            desc.enumerable === false  &&
            desc.enumerable === false  &&
            desc.get !== undefined &&
            desc.set !== undefined ;
}
runTestCase(testcase);
