// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield in object literal
author: Nikhil Suryanarayanan
---*/

function *gfoo(n){
    return yield  {
        a : yield -1
    }
}
var iter = gfoo(2);
var iterresult;
iterresult = iter.next();
if(iterresult.value !== -1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: -1, done: false}');
var result = iter.next(1);
if(result.value.a !== 1)
    $ERROR('Yield in object literal failed');
iterresult = iter.next(100);
if(iterresult.value !== 100 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 100, done: true}');
