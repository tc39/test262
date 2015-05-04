// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Object returned from a function"
---*/

var a = 10;

function createObj() {
    return {
        b() { return this.a; },
        a
    };
}

var output = createObj().b();
if (output !== 10) {
    $ERROR("Got a wrong value for the method definition. Actual : " + output + ". Expected : 10");
}
