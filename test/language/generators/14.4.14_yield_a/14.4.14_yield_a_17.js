// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: new(yield)
author: Nikhil Suryanarayanan
---*/

function foo() {this.a = 1;}
function *gfoo() {
    return new (yield "new");
}
var iter = gfoo();
var iterresult;
iterresult = iter.next();
if(iterresult.value !== "new" || iterresult.done !== false)
    $ERROR('IterResult value is incorrect for {value: "new", done: false}');
var tmp = iter.next(foo);
if(tmp.value.a !== 1)
    $ERROR('Incorrect new operation');
if(tmp.done !== true)
    $ERROR('Generator should have been completed');
