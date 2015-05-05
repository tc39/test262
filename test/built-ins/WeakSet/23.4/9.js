// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.2.1 - WeakSet.prototype has attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: false }.
author: Nikhil Suryanarayanan
---*/

var desc = Object.getOwnPropertyDescriptor(WeakSet, "prototype");

if (desc.writable !== false || desc.enumerable !== false || desc.configurable !== false)
    $ERROR("WeakSet.prototype descriptor is incorrect");
