// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: In if statement"
author: Nikhil Suryanarayanan
---*/

var access = false;
function *gfoo(){
    if(yield 1){
        access = true;
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next(1);
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
if(access !== true)
    $ERROR('YieldExpression in if clause failed');
