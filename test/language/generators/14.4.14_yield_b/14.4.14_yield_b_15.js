// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield * AssignmentExpresion - Yield  * array
author: Nikhil Suryanarayanan
---*/

var arr = [1,5,2,4,3];
function *gfoo() {
    yield * arr;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== 5 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 5, done: false}');
iterresult = iter.next();
if(iterresult.value !== 2 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 2, done: false}');
iterresult = iter.next();
if(iterresult.value !== 4 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 4, done: false}');
iterresult = iter.next();
if(iterresult.value !== 3 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 3, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
