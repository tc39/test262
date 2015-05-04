// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Simple method definition with closure
includes:
---*/

var a = "Hello", b = "World";
var obj = {
    add () {
        return a + " " + b;
    }
};

var output = obj.add();
if (output !== "Hello World") {
    $ERROR("Got a wrong value for the method definition. Actual : " + output + ". Expected : Hello World");
}
