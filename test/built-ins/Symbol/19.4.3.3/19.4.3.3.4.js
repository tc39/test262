// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype.valueOf unwraps Symbol wrapper objects
---*/

var sym = Symbol();
var obj = Object(sym);
var valueOf = Symbol.prototype.valueOf.call(obj);

if (valueOf !== sym) {
    $ERROR("valueOf !== sym");
}
