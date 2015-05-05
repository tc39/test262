// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: yield in caseclause"
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {
    switch(1){
        case yield:
        case yield: return "pass";
        default: $ERROR('YieldExpression in caseclause failed');
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next(1);
if(iterresult.value !== "pass" || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: "pass", done: true}');
