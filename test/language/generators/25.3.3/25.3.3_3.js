// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    // #D - GeneratorStart - 6.    Set generator’s [[GeneratorState]]
    internal slot to "suspendedStart".
author: Nikhil Suryanarayanan
---*/

var evaluatedfunction = false;
var gfoo = function *() {
    evaluatedfunction = true
    return yield 1
};
var iter = gfoo();
if(evaluatedfunction !== false)
    $ERROR('GeneratorStart should not execute the function body');
// We should be able to call GeneratorResume
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
