// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield * {} throws TypeError
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() { yield * {} }
var iter = gfoo();
try{
    iter.next();
    throw 1;
}catch(e) {
    if(!(e instanceof TypeError))
        $ERROR('yield * {} should throw TypeError as {} does not have [Symbol.iterator]')
}
