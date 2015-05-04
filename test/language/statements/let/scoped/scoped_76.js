// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: let statements must be inside a block when used in with statements
flags: [negative]
---*/

function testcase() {
    with (this) let x = 1;
};
testcase();
