// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: IdentifierReference from method args
includes:
---*/

function createObject(a, b) {
    return { a, b };
}

var obj = createObject(5, 3);
if (obj.a !== 5) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.a + ". Expected : 5");
}
if (obj.b !== 3) {
    $ERROR("Got a wrong value for the property b. Actual : " + obj.b + ". Expected : 3");
}
