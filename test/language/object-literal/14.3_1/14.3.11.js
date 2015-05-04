// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing the this binding inside a MethodDefinition
includes:
---*/

var obj = {
    ["a"] : 10,
    b() {
        return this.a;
    }
};

if (obj.b() !== 10) {
    $ERROR("Got a wrong value from the method definition. Actual : " + obj.b() + ". Expected : 10");
}
