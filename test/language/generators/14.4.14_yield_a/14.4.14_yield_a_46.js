// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread a result of yield in array
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    return [... yield];
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
var result = iter.next("key");
if(result.value.length !== 3 || result.done !== true)
    $ERROR('Failed to spread result of yield');
var arr = result.value;
if(arr[0] !== 'k' || arr[1] !== 'e' || arr[2] !== 'y' )
    $ERROR('Array elements are incorrect')
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
