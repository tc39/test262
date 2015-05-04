// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: __proto__ in Object Initializer. UnderScoreProtoEnabled is false
includes: [runTestCase.js]
---*/

function testcase() {

    delete Object.prototype.__proto__;

    var proto = { y: 2 };

    var obj = {
        x: 1,
        __proto__: proto
    };

    return obj.y === 2;

}
runTestCase(testcase);
