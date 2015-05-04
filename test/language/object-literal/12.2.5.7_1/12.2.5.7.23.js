// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Make sure that the object's prototype is assigned properly
---*/

var a = 10
var obj = {
    a,
    ['Square of ' + a] : a * a,
    get SquareA() {
        return this['Square of 10'];
    }
};

if (obj.__proto__ !== Object.prototype) {
    $ERROR("Object literal is expected to have the prototype obj.__proto__");
}
