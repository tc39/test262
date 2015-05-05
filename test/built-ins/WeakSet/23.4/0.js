// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.1.1 - 2.    If Type(set) is not Object then,  throw a
    TypeError exception.
author: Nikhil Suryanarayanan
---*/

var error;
try {
    WeakSet.call(undefined);
} catch(e) {
    error = e;
}
if (!(error instanceof TypeError))
    $ERROR("TypeError Expected");
