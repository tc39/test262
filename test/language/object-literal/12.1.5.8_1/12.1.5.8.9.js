// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[IdentifierReference]] IdentifierReference in cascaded with
    constructs
---*/

var obj1 = {
    a : function() { return 100; }
};
var obj2 = {
    c : 20
};
with (obj1) {
    with (obj2) {
        var obj3 = {
            a,
            c
        };
    }
}

if (obj3.a() !== 100) {
    $ERROR("Got a wrong value for the method a. Actual : " + obj3.a() + ". Expected : 100");
}
if (obj3.c !== 20) {
    $ERROR("Got a wrong value for the property c. Actual : " + obj.c + ". Expected : 20");
}
