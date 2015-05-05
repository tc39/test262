// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Make sure that the object is extensible
---*/

var a = 10
var obj = {
    a,
    ['Square of ' + a] : a * a,
    get SquareA() {
        return this['Square of 10'];
    }
};

if (!Object.isExtensible(obj)) {
    $ERROR("Object literal should be entensible");
}
