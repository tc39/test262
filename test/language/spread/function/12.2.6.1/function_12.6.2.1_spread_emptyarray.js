// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Spread empty array
author: Nikhil Suryanarayanan
---*/

function q(a,b){
     return a === undefined && b === undefined && arguments.length === 0;
 }
 var a = [];
 if(q(...a) !== true)
    $ERROR('Spread an empty array test foo(..[]) failed')
