// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield tmp >> 1
author: Nikhil Suryanarayanan
---*/

function *gfoo(){
    yield 2>>1
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
