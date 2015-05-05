// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.4 - WeakSet.prototype.delete - Delete a key that is present
    in a WeakSet
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();
var obj = {};

ws.add(obj);

if (ws.delete(obj) !== true)
    $ERROR("Expected return value to be true");
