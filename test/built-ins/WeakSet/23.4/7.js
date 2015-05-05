// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.2 - The value of the [[Prototype]] internal slot of the
    WeakSet constructor is the Function prototype object
author: Nikhil Suryanarayanan
---*/

if (Object.getPrototypeOf(WeakSet) !== Function.prototype)
    $ERROR("The value of the [[Prototype]] internal slot of the WeakSet constructor is not the Function prototype object");
