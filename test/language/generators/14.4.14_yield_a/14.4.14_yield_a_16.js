// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new (yield)
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    true ? yield 1: yield 0;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
