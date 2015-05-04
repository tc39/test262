// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Declaring a let statement in eval with strict mode and identifier
    eval should fail
flags: [negative]
---*/

eval('"use strict"; let eval = 3;')
