// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: Multiple yield statements"
author: Nikhil Suryanarayanan
---*/

var gfoo = function *(a) {
    return yield yield a;
};
var iter = gfoo(-10);
var iterresult;
iterresult = iter.next(-10);
if(iterresult.value !== -10 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: -10, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(1);
if(iterresult.value !== 1 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 1, done: true}');
