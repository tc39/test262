// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.1 - WeakSet.prototype.add - 8.    Append value as the last
    element of entries.
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();
var objects = [{}, [], {}]
ws.add(objects[0]);
ws.add(objects[1]);
ws.add(objects[2]);

for (var i = 0; i < objects.length; i++)
    if (!ws.has(objects[i]))
        $ERROR("Object is not present in the container");
