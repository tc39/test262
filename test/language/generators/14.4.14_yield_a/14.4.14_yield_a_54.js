// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield in string concat
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var yield = 1
function *gfoo() {
    return yield + "generator"
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(!Number.isNaN(iterresult.value) || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 0, done: false}');
iterresult = iter.next(100);
if(iterresult.value !== 100 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 100, done: true}');
