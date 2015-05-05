// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield in an array
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    var arr = [4,yield];
    return arr[0] + arr[1]
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(5);
if(iterresult.value !== 9 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 9, done: true}');
