// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ on this"
includes: [runTestCase.js]
---*/

function testcase() {

    var obj = {
        deleteProto: function () {
            delete this.__proto__;
        }
    }
    obj.__proto__ = { y: 2 };
    Object.defineProperty(obj, '__proto__', { value: { y: 3 }, configurable: true });
    obj.deleteProto();

    return obj.y === 2;

}
runTestCase(testcase);
