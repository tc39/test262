// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Object.getOwnPropertySymbols(obj) returns array containing symbol-keyed properties
---*/

var sym = Symbol('1');
var obj = { [sym]: 'value' };
var res = Object.getOwnPropertySymbols(obj);

if (res.length !== 1) {
    $ERROR("Object.getOwnPropertySymbols returned wrong number of properties");
}

if (res[0] !== sym) {
    $ERROR("Object.getOwnPropertySymbols did not return a symbol-keyed property");
}
