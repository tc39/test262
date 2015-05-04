// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[IdentifierReference]] IdentifierReference for an object inside a
    function scope
---*/

function test(a) {
    var o1 = {
        a
    };
    var obj = {
        o1
    };

    if (obj.o1 !== o1) {
        $ERROR("Got a wrong value for the property b. Actual : " + obj.o1 + ". Expected : " + o1);
    }

    if (obj.o1.a !== 10) {
        $ERROR("Got a wrong value for the property b. Actual : " + obj.o1.a + ". Expected : " + o1.a);
    }
}

test(10);
