// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Method definition in strict mode"
---*/

"use strict";
var add = 10;
var obj = {
    add (add, b) {
        return add + " = " + b;
    }
};

var output = obj.add(add, "10");
if (output !== "10 = 10") {
    $ERROR("Got a wrong value for the method definition. Actual : " + output + ". Expected : 10 = 10");
}
