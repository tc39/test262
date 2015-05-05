// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    It's a redeclaration error to have a var statement followed by a
    let statement inside a function with the same identifier name
flags: [negative]
---*/

function testcase() {
    function foo() {
        var x;
        let x = 4;
    }
    foo();
};
testcase();
