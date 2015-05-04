// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    const statements must be inside a block when used in for-loop
    statements
flags: [negative]
---*/

function testcase() {
    for (var i = 1; i >= 0; i--) const x = 1;
};
testcase();
