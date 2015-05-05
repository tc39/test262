// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
flags: [description]
---*/

function testcase() {
    function foo() {
        try {} catch (e) {
            var e = 10;
        }
    }
    foo();
}
testcase();
