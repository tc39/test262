// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 23.4.3.4 - WeakSet.prototype.delete - Delete a key from weakset
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();

ws.add(ws);

if (ws.delete(ws) !== true)
    $ERROR("Delete of WeakSet object from WeakSet failed");

if (ws.has(ws))
    $ERROR("Key should have been deleted");
