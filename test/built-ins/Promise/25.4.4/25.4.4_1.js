// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 25.4.4 - length property (whose value is 1)
author: Nikhil Suryanarayanan
---*/

if(Promise.constructor.length !== 1)
    $ERROR("Length expected to be 1");
