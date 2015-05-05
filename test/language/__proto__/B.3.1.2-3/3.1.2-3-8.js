// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ on object having own property __proto__"
includes: [runTestCase.js]
---*/

function testcase() {
    var obj = { x: 1 };
    obj.__proto__ = {y:2}
    Object.defineProperty(obj, '__proto__', { value: { z: 3}, configurable:true, writable:true} );

    if (obj.y !== 2 || obj.__proto__.y !== undefined)
        return false;

    obj.__proto__ = {y:99};

    if(obj.__proto__.y !== 99)
        return false;

    delete obj.__proto__;

    return obj.y === 2 && obj.__proto__ !== undefined ;
}

runTestCase(testcase);
