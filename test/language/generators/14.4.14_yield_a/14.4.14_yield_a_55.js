// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield in string concat
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var yield = 1
function *gfoo() {
    return (yield) + "generator"
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(100);
if(iterresult.value !== "100generator" || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: "100generator", done: true}');
