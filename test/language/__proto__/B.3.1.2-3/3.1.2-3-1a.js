// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Delete]] __proto__ on Object.prototype. UnderScoreProtoEnabled
    is false
includes: [runTestCase.js]
---*/

function testcase() {

    delete Object.prototype.__proto__;

    var proto = {y:2};

    var obj = { x: 1 };
    obj.__proto__ = proto;

    return obj.y === undefined &&
        obj.__proto__ === proto;

}
runTestCase(testcase);
