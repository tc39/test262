// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread - Function.apply
author: Nikhil Suryanarayanan
---*/

var a = [1,2,3,4];
 function q(a,b,c,d){
    return a + b + c + d;
 };

 var a = [1,2,3,4];
 if(q.apply(...[null, ...[a]]) !== 10 ||  q.apply(...[undefined, a]) !== 10 || q.apply(...[this, a]) !== 10)
    $ERROR('Function.call test for spread failed');
