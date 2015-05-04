// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield inside a computed property
author: Nikhil Suryanarayanan
---*/

function *gfoo(){
    return {
        [yield 1] : 2
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
var result = iter.next();
if(result.value["undefined"] !== 2)
    $ERROR('Yield inside a computer property failed');
