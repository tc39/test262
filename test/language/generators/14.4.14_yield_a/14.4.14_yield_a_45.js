// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield in for-of loop
author: Nikhil Suryanarayanan
---*/

var obj = {};
obj[Symbol.iterator] = function *(){
    yield 1;
}
function *gfoo () {
    for(obj[yield "lhs"] of yield "exp" ){
        yield "stm";
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== "exp" || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: "exp", done: false}');
iterresult = iter.next(obj);
if(iterresult.value !== "lhs" || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: "lhs", done: false}');
iterresult = iter.next(1);
if(iterresult.value !== "stm" || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: "stm", done: false}');
if(obj[1] !== 1)
    $ERROR('obj[1] should be 1');
iterresult = iter.next(2);
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
if(Object.getOwnPropertyNames(obj).length !== 1)
    $ERROR('Only one object should have been added');
