// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "YieldExprssion: In with statement"
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var gfoo = function *(){
    with(yield){
        if(a !== 1)
            $ERROR('YieldExpression: in with statement failed');
        return "pass"
    }
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: undefined, done: false}');
iterresult = iter.next({a:1});
if(iterresult.value !== "pass" || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: "pass", done: true}');
