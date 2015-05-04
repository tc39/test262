// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[IdentifierReference]] IdentifierReference with arguments object"
---*/

function test2() {
    return [{arguments}]
}

var a = test2();
if (a[0].arguments.length !== 0) {
    $Error("Arguments length is expected to be 0");
}
