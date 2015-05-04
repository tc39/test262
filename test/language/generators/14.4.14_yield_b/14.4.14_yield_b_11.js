// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Yield - received value has done property - generator should not
    consider this property
author: Nikhil Suryanarayanan
---*/

var result = [];
function *gbar() {
    yield {done: true,  value: 1};
    yield {done: true,  value: 2};
    yield {done: false, value: 3};
}
var gfoo = function * (){
    yield * gbar();
}
var iter = gfoo();
var result = iter.next();
if(result.done !== false || result.value.done !== true  || result.value.value !== 1)
    $ERROR('Incorrect value');
result = iter.next();
if(result.done !== false || result.value.done !== true  || result.value.value !== 2)
    $ERROR('Incorrect value');
result = iter.next();
if(result.done !== false || result.value.done !== false || result.value.value !== 3)
    $ERROR('Incorrect value');
result = iter.next();
if(result.done !== true || result.value !== undefined)
    $ERROR('Incorrect value');
