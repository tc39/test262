// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[IdentifierReference]] Value of IdentifierReference is captured
    during the definition
---*/

var a = 10;
var obj1 = {
    a
};
if (obj1.a !== 10) {
    $ERROR("Got a wrong value for property. Actual : " + obj1.a + ". Expected : 10");
}

a = function () {
    return 20;
}
var obj2 = {
    a
};
if (obj2.a() !== 20) {
    $ERROR("Got a wrong value from the method property. Actual : " + obj1.a() + ". Expected : 20");
}
