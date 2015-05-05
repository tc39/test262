// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: Single yield statement"
author: Nikhil Suryanarayanan
---*/

var gfoo = function *(a) {
    return a + (yield);
};
var iter = gfoo(-10);
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(10);
if(iterresult.value !== 0 || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: 0, done: true}');
