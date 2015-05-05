// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.5 - WeakSet.prototype.has - 2. If Type(S) is not Object,
    then throw a TypeError exception
author: Nikhil Suryanarayanan
---*/

var error;

try {
    WeakSet.prototype.has.call(null);
} catch(e) {
    error = e;
}

if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
