// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread - Function.call
author: Nikhil Suryanarayanan
---*/

var a = [1,2,3,4];
 function p(){
    return this;
 }

 if(p.call(...[null, ...a]) !== this ||  p.call(...[undefined, ...a]) !== this || p.call(...[a, ...a]) !== a)
    $ERROR('Function.call test for this object failed');
