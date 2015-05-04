// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[IdentifierReference]] IdentifierReference and a prpoperty
    definition
---*/

var a = 5;
var obj = { a, b : 3 };

if (obj.a !== 5) {
    $ERROR("Got a wrong value for the property a. Actual : " + obj.a + ". Expected : 5");
}
if (obj.b !== 3) {
    $ERROR("Got a wrong value for the property b. Actual : " + obj.b + ". Expected : 3");
}
