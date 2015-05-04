// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExpression: Switch case"
author: Nikhil Suryanarayanan
---*/

var gfoo = function *() {
    switch(yield){
        case 1: return "pass";
        default: $ERROR("YieldExpression in switch case failed");
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
