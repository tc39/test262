// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield inside a computer property
author: Nikhil Suryanarayanan
---*/

function *gfoo(){
    return {
        [yield] : 2
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
var result = iter.next("key");
if(result.value.key !== 2)
    $ERROR('Yield inside a computer property failed');
