// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[yield]"
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    return [yield].length
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(1);
if(iterresult.value !== 1 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 1, done: true}');
//calling next again should return undefined true
iterresult = iter.next(1);
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
