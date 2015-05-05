// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: const statements must be inside a block when used in if statements
flags: [negative]
---*/

function testcase() {
    if (true) const x = 1;
};
testcase();
