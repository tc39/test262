// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield in cover grammar
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    return (1, yield)
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(1);
if(iterresult.value !== 1 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 1, done: true}');
