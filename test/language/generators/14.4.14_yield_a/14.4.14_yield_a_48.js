// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Yield should not be shadowed in a with block when inside a
    generator
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var obj = {
    yield: 1
}
function *gfoo() {
    with (obj){
        yield yield
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(22);
if(iterresult.value !== 22 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 22, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
