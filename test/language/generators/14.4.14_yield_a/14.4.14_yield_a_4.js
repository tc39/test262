// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: Return statment before encountering yield"
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {
    yield;
    return 2;
};
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(10);
if(iterresult.value !== 2 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 2, done: true}');
