// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Behaviour of IdentifierReference inside with construct
includes:
---*/

var obj1 = {
    b : 10
};
with (obj1) {
    var obj2 = {
        b
    };
}

if (obj2.b !== 10) {
    $ERROR("Got a wrong value for the property b. Actual : " + obj2.b + ". Expected : 10");
}
