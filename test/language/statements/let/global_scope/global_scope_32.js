// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Const declarations can have multiple bindings in a single
    statement, but they can't have unassigned values
flags: [negative]
---*/

const x = 1, y;
