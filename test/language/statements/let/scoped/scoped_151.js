// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description:
flags: [negative]
---*/

function testcase() {
    const f = 3;
    {
        eval("function f() { } f();");
    }
}
testcase();
