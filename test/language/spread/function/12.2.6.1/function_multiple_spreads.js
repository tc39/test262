// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Multiple Sread are allowed in the same function invocation
author: Nikhil Suryanarayanan
---*/

var b = ["check"];
 function foo(){
    return true;
 }

 if(eval('foo(1,2,...[],...[]);') !== true)
    $ERROR('Calling function with multiple spread failed in eval');

 if(foo(1,2,...[1,2,3], ...b) !== true){
    $ERROR('Calling function with multiple spread failed');
 }
