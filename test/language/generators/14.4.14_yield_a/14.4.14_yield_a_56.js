// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Shadowing yield
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var x = { yield: 1}
function *gfoo( ){
    eval("var yield = 2;");
    with (x) {
           var y = yield + 1;
           yield y;
           eval("yield = 5;");
    }

    if(eval("yield") !== 2 )
        $ERROR("yield value expected to be 2 inside eval");
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
iterresult = iter.next(-1);
if(iterresult.value !== -1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: -1, done: false}');
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
if(x.yield !== 5)
    $ERROR('x.yield expected to be 5');
