// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Method argument is re-declared inside the method body
includes:
---*/

"use strict";

var obj = {
    _v: 0,
    get prop() {
        return this._v;
    },
    set prop(a) {
        var a = 1;
        this._v = a;
    }
}
obj.prop = 2;
if (obj.prop !== 1) {
    $ERROR("Property is expected to return the value of the variable declared inside the set method");
}
