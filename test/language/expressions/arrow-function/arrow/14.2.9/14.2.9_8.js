// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Capturing closure variables - wwith
author: Nikhil Suryanarayanan
---*/

function foo(){
     var a = {a : 10};
    with(a){
        return () => a;
    }
 }

 if(foo(0)(0) !== 10)
     $ERROR("Closure variable was captured incorrectly. Expected:1 but Actual:" + foo(0)(0));
