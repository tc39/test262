// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: Return statment before encountering yield"
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {
    return 2;
    yield;
};
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 2 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 2, done: true}');
