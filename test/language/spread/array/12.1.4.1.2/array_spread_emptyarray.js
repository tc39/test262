// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Spread empty array
author: Nikhil Suryanarayanan
---*/

var a = [];
 var b = [...a];
 if(b.length !== 0)
    $ERROR('Spread an empty array [...[]] test failed')
