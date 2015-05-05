// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Basic test for octal literal
---*/

var octalArray = [0o0, 0O0, 0o1, 0O1, 0o2, 0O2, 0o3, 0O3, 0o4, 0O4, 0o5, 0O5, 0o6, 0O6, 0o7, 0O7, 0o10, 0O10];

for (var i = 0; i < octalArray.length; i++) {
    if (octalArray[i] !== Math.floor(i / 2)) {
        $ERROR("" + i + "th element " + octalArray[i] + " should be equal to " + Math.floor(i / 2));
    }
}
