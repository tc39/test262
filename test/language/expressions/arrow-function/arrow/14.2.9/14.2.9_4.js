// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Capturing closure variables
author: Nikhil Suryanarayanan
---*/

var a = 1
 function foo(){
    return ()=>a;
 }

 if(foo(0)(0) !== 1)
     $ERROR("Closure variable was captured incorrectly. Expected:1 but Actual:" + foo(0)(0));
