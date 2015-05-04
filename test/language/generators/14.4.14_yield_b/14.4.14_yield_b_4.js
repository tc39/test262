// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    yield * AssignmentExpression - received.[[type]] is throw. Check
    if iterator HasProperty "throw"
author: Nikhil Suryanarayanan
---*/

var obj = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {value: 1, done: false}
            },
            throw: function() {
                return {value : -1, done: true}
            }
        }
    }
}
function *gfoo() {
    yield * obj;
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== 1 || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: 1, done: false}');
//%% VERIFYTNEXT throw() -1 true
