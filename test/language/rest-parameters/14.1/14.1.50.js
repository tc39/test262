// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: from bug
---*/

function test0() {
    var func1 = function (...argArr2) {
        if (false) {
            var strvar9 = '$!7-'()(argArr2.shift());
        }
    };
    func1();
}
test0();
test0();
