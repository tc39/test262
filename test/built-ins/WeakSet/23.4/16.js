// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.1 - WeakSet.prototype.add - 7a.    If e is not empty and
    SameValue(e, value) is true, then i.    Return S.

    23.4.3.1 - WeakSet.prototype.add - 9.    Return S.
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();
var obj = {};

if (ws.add(obj) !== ws)
    $ERROR("Expected Return value is S");

if (ws.add(obj) !== ws)
    $ERROR("Expected return value is S");
