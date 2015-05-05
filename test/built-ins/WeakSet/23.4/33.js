// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.5 - WeakSet.prototype.has - 6. If Type(value) is not an
    object, then return false;
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet([{}]);

if (ws.has(undefined) !== false)
    $ERROR("Return value expected to be false");
