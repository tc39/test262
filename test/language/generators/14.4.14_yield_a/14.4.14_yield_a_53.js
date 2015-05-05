// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield propertyname exists in the propertyname chain
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var obj = {
    yield: {
        x: 1
    }
}
function *gfoo() {
    yield obj.yield.x;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
