// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    BindingIdentifier can be accessed inside the generatorbody and can
    be called recursively
author: Nikhil Suryanarayanan
---*/

var foo = function * baz(val) {
    if(val == false)
        yield [];
    else
        yield * baz(false)
}
var iter = foo(true);
var iterresult;
iterresult = iter.next();
if(!Array.isArray(iterresult.value) || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: [], done: false}');
