// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    get Set.prototype.size TypeError expected if thisArg does not have
    [[SetData]]
includes: [runTestCase.js]
---*/

function testcase() {

    function Child() {

    };
    Child.prototype = Set.prototype;
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
