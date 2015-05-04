// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: using spread on array returned from function call
author: Nikhil Suryanarayanan
---*/

function q(a,b,c,d){
    return a + b + c + d;
 }

 function getArray(){
    return [1,2,3,4];
 }
 var a = getArray();

 if( q(...getArray()) !== 10 || q(...a) !== 10)
     $ERROR('Spread call failed when spread is performed on result from function call');
