// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: (yield 1) + (yield 2) - should yield 1 and 2
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {
   return (yield 1) + (yield 2) ;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next(5);
if(iterresult.value !== 2 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 2, done: false}');
iterresult = iter.next(5);
if(iterresult.value !== 10 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 10, done: true}');
