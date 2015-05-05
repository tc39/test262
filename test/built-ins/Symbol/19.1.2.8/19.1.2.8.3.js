// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Object.getOwnPropertySymbols(obj) returns empty array if obj contains no symbol-keyed properties
---*/

var obj = { 'string-key': 'value' };
var res = Object.getOwnPropertySymbols(obj);

if (res.length !== 0) {
    $ERROR("Object.getOwnPropertySymbols returned wrong number of properties");
}
