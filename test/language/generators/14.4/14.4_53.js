// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield a Regular Expression
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    yield /a/;
}
var iter = gfoo();
var result = iter.next();
if(result.value.constructor.prototype !== RegExp.prototype)
    $ERROR('Yield did not return a Regular Expression');
