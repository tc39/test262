// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Yield in CoverGrammar
author: Nikhil Suryanarayanan
---*/

function *gfoo() {
    var b = [1,2, (yield, 1)];
    return b[0] + "" + b[1] + "" + b[2];
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(3);
if(iterresult.value !== "121" || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: "121", done: true}');
