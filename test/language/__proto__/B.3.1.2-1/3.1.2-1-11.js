// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on user defined object"
includes: [runTestCase.js]
---*/

function testcase() {

    var base = { x: 2 };
    var obj = Object.create(base);
    obj.getProto = function () {
        return this.__proto__;
    }

    return obj.getProto() === base;
}
runTestCase(testcase);
