// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: A let statement which is declared in a for-loop doesn't get hoisted
flags: [negative]
---*/

function testcase() {
    for (let i = 1; i > 0; i--) {
        result1 = i;
    };
    i++;
};
testcase();
