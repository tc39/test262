// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Multiple yield *
author: Nikhil Suryanarayanan
---*/

function *gbar() {
    yield 1;
    yield 2;
    yield 3;
    return gbar();
}

var gfoo = function*(){
    return yield * yield * yield;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(gbar());
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== 2 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 2, done: false}');
iterresult = iter.next();
if(iterresult.value !== 3 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 3, done: false}');
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== 2 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 2, done: false}');
iterresult = iter.next();
if(iterresult.value !== 3 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 3, done: false}');
iterresult = iter.next();
if(iterresult.done !== true)
    $ERROR('Excepted Generator state to be completed');
