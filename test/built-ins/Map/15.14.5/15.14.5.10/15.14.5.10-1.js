// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    get Map.prototype.size TypeError expected if thisArg does not have
    [[MapData]]
includes: [runTestCase.js]
---*/

function testcase() {

    function Child() {
    };
    Child.prototype = Map.prototype;
    Child.prototype.contructor = Child;

    var child = new Child();

    try {
        child.size;
    } catch (e) {
        if (!(e instanceof TypeError))
            return false;
    }

    return true;
};
runTestCase(testcase);
