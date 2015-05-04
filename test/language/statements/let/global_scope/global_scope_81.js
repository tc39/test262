// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    const statements must be inside a block when used in for-in
    statements
flags: [negative]
---*/

var data = {name: "john", surname:"doe"};
for (var x in data) const i = 1;
