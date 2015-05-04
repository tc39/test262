// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Big octal literal
---*/

var a = 0o636413567457521745734147374723;
var b = 1.0022549147266063e+27;
if (a !== b) {
    $ERROR("Expected value for " + a + " is " + b);
}
