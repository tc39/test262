// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Yield AssignmentExpression - ReturnIfAbrupt after evaluating
    AssignemntExpression
author: Nikhil Suryanarayanan
---*/

function foo() {throw "exception"}
function *gfoo(){
    yield foo();
}
var iter = gfoo();
try{
    iter.next();
    $ERROR('Expecting iter.next to throw');
}catch(e){}
//generator now has entered completed state
var iterresult;
iterresult = iter.next();
if(iterresult.value !== undefined || iterresult.done !== true)
    $ERROR('IterResult value is incorrect for {value: undefined, done: true}');
