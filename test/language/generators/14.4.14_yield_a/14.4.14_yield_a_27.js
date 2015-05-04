// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generate array of fibonnaci series
author: Nikhil Suryanarayanan
---*/

function * fib(n){
    x = -1;
    y = 1;
    while( x + y < n){
        tmp = x + y;
        yield tmp;
        x = y;
        y = tmp;
    }
}
var iter = fib(0);
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');

iter = fib(6);
iterresult = iter.next();
if(iterresult.value !== 0 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 0, done: false}');
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
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
if(iterresult.value !== 5 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 5, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
