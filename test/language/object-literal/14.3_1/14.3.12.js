// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Refers to own property
includes:
---*/

var a = 10;
var obj = {
    a : 30,
    [this.a] : 20,
    b() {
        if(this[10] !== 20) {
            $ERROR("Got a wrong value for the computed property 30. Actual : " + this[10] + ". Expected : 20");
        }
        return this.a;
    }
}

if (obj.b() !== 30) {
    $ERROR("Got a wrong value from the method definition. Actual : " + obj.b() + ". Expected : 30");
}
