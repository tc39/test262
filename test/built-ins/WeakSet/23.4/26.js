// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.4 - WeakSet.prototype.delete - 5. If Type(value) is not
    Object, then return false
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet([{}]);

if (ws.delete(1) !== false)
    $ERROR("Expected false as the return value");
