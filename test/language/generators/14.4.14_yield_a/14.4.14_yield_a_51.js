// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Generator accessing a property of the name yield
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var obj = {
    yield: 1
}
function *gfoo() {
    obj[yield] ++;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next("yield");
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
if(obj.yield !== 2)
    $ERROR('obj.yield expected to be 2');
