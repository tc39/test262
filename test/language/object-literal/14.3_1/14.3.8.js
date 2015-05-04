// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Get and set methods"
---*/

var obj = {
    internalB : 10,
    get b() {
        return this.internalB;
    },
    set b(value) {
        this.internalB = value
    }
}

if (obj.b !== 10) {
    $ERROR("Get returned wrong value. Actual : " + obj.b + ". Expected : 10");
}
obj.b = 20;
if (obj.b !== 20) {
    $ERROR("Get returned wrong value after set. Actual : " + obj.b + ". Expected : 20");
}
