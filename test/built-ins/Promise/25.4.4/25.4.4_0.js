// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    25.4.4 - The value of the [[Prototype]] internal slot of the
    Promise constructor is the Function prototype object
author: Nikhil Suryanarayanan
---*/

if(Promise.constructor.prototype !== Function.prototype)
    $ERROR('he value of the [[Prototype]] internal slot of the Promise constructor is the Function prototype object');
