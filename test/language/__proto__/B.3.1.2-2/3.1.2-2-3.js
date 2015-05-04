// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ of value literal"
---*/

var a = 1;
a.__proto__ = Boolean.prototype;

var b = true;
b.__proto__ = Number.prototype;


if (a.__proto__ !== Number.prototype || b.__proto__ !== Boolean.prototype) {
    $ERROR('[[Put]] __proto__ cannot update proto of value literal');
}
