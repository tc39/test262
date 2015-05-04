// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Method definition with params"
---*/

var obj = {
    add (a, b) {
        return a + " " + b;
    }
};

var output = obj.add("Hello", "World");
if (output !== "Hello World") {
    $ERROR("Got a wrong value for the method definition. Actual : " + output + ". Expected : Hello World");
}
