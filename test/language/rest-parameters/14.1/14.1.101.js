// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Rest param with Function.prototype.call()
---*/

function Obj() {
    this.a = 10;
    this.getSquare = function(b = this.a, ...c) {
        return `${b * b}`;
    }
}
var result = (new Obj()).getSquare.call(new Obj());
if (result !== "100") {
    $ERROR("Expected result is 100, but got " + result);
}
