// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[MethodDefinition]] Method definition accessing own properties"
---*/

var a = 10;
var obj = {
    b() {
        a = 20;
        if (this.a !== 10) {
            $ERROR("Got a wrong value for the property a inside method definition. Actual : " + this.a + ". Expected : 20");
        }
    },
    a
}

obj.b();
