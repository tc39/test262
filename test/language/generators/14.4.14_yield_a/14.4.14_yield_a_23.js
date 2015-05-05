// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Simple yield
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() { yield 1 + 2; }
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 3 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 3, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
