// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Promise.prototype has attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: false }
author: Nikhil Suryanarayanan
---*/

var desc = Object.getOwnPropertyDescriptor(Promise, "prototype");
if(desc.writable !== false || desc.enumerable !== false || desc.configurable !== false)
    $ERROR("Error in descriptor");
