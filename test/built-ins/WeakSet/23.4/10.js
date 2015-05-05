// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.2.2 - WeakSet[@@create] - obj be the result of calling
    OrdinaryCreateFromConstructor(F, "%WeakSetPrototype%", (
    [[WeakSetData]] )).
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();

if (Object.getPrototypeOf(ws) !== WeakSet.prototype)
    $ERROR("[[Prototype]] of WeakSet instance should be WeakSet.prototype");
