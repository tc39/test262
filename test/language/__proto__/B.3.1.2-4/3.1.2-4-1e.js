// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[DefineOwnProperty]] UnderScoreProtoEnabled is set to false when
    Object.prototype.__proto__ is converted to accessor property
includes: [runTestCase.js]
---*/

function testcase() {
    var bool = false;

    Object.defineProperty(Object.prototype, "__proto__", {
        set: function () { return  },
        get: function () { bool = true; return 20; }
    });

    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

    var changed = desc.enumerable === false &&
        desc.configurable === true &&
        typeof desc.get === "function" &&
        typeof desc.set === "function";

    //writable is undefined

    var obj = {};
    obj.__proto__ = { x: 10 };
    return changed && (obj.x === undefined);
}
runTestCase(testcase);
