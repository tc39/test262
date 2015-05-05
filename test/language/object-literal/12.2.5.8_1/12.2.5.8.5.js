// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[IdentifierReference]] Multi-level IdentifierReference"
---*/

var a = 10;
var obj = {
    a,
    objLevel2 : {
        a
    }
};

if (obj.a !== 10) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.a + ". Expected : 10");
}
if (obj.objLevel2.a !== 10) {
    $ERROR("Got a wrong value for the property obj.objLevel2.a. Actual : " + obj.objLevel2.a + ". Expected : 10");
}
