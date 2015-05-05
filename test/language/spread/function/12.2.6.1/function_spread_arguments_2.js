// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: verify arguments object
author: Nikhil Suryanarayanan
---*/

function q(a,b,c,d){
     return arguments.length === 4 &&
           arguments[0] === 1 &&
           arguments[1] === 2 &&
           arguments[2] === 3 &&
           arguments[3] === 4 ;
 }

 function getArray(){
     return [1,2,3,4];
 }

 if(q(...getArray()) !== true ){
    $ERROR('Arguments object is incorrect when function is invoked using spread');
 }
