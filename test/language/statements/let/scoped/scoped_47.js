// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    A const statement can't be assigned from a function body before
    it's initialized
flags: [negative]
---*/

function testcase() {
    function foo() {
        x++;
    }
    foo();
    const x = 4;
};
testcase();
