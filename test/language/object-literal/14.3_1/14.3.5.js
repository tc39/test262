// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[MethodDefinition]] Global method definition and internal method
    definition should not conflict
---*/

"use strict";

var a = 10;
function method() {
    return a;
}

var obj = {
    a : 20,
    method() {
        return this.a;
    }
}

var output = obj.method();
if (output !== 20) {
    $ERROR("Got a wrong value from the method definition. Actual : " + output + ". Expected : 20");
}

output = method();
if (output !== 10) {
    $ERROR("Got a wrong value from the global method. Actual : " + output + ". Expected : 10");
}
