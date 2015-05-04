// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Using arguments as an identifier in strict mode let statements is
    an error
flags:
    - negative
    - onlyStrict
---*/

function testcase() {
    "use strict";
    let arguments = 1;
};
testcase();
