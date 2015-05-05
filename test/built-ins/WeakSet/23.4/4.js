// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.1.1 - 7c.    If IsCallable(adder) is false, throw a TypeError
    Exception.
author: Nikhil Suryanarayanan
---*/

var error;
WeakSet.prototype.add = {};
try {
    new WeakSet([{}]);
} catch(e) {
    error = e;
}

if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
