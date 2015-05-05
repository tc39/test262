// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    A let statement can't be assigned from a function body before it's
    initialized
flags: [negative]
---*/

function testcase() {
    function foo() {
        let x = bar();
        function bar(){ y++; }
        let y;
    }
    foo();
};
testcase();
