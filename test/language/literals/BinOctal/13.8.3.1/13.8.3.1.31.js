// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Bin and octal string literals
---*/

var a = 1 + "0b101";
if (a !== "10b101") {
    $ERROR("The value of " + a + "is expected to be 10b101");
}

var b = 1 + "0o342";
if (b !== "10o342") {
    $ERROR("The value of " + b + " is expceted to be 10o342");
}
