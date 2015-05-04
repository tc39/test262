// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Math max and Math min
author: Nikhil Suryanarayanan
---*/

var a = [1,2,3];

 if(Math.max(...a)!==3 || Math.min(...a)!=1)
    $ERROR('Spread failed for max and min operations');
