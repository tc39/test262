// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: (1, yield) - (yield, 1)
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    return (1, yield) - (yield, 1)
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(5);
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(5);
if(iterresult.value !== 4 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 4, done: true}');
//sanity check
iterresult = iter.next(5);
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
