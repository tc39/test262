// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.4 - WeakSet.prototype.delete - 3.    If S does not have a
    [[WeakSetData]] internal slot throw a TypeError exception.
author: Nikhil Suryanarayanan
---*/

var error;
var obj = {}

try {
    WeakSet.prototype.delete.call(obj);
} catch(e) {
    error = e;
}

if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
