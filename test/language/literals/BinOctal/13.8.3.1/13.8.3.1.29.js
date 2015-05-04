// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Big binary literal
---*/

var a = 0b10000110101001010101001001001100101010101010010101010010100;
if (a !== 303195358171048596) {
    $ERROR("Expected value for " + a + " is 303195358171048596");
}
