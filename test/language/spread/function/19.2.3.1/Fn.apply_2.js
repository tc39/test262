// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread - Function.apply
author: Nikhil Suryanarayanan
---*/

var a = [1,2,3,4];
 function p(){
    return this;
 }

 if(p.apply(...[null, a]) !== this ||  p.apply(...[undefined, a]) !== this || p.apply(...[a, ...[a]]) !== a)
    $ERROR('Function.call test for this object failed');
