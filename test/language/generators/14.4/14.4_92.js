// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    14.4.14 - BindingIndentifier name should be visible inside the
    generator function body
author: Nikhil Suryanarayanan
---*/

var methodcalled = false;
var gfoo = function*baz(){
    if(typeof baz === undefined)
        $ERROR('baz is undefined inside the generator');
    methodcalled = true;
}
var iter = gfoo();
if(methodcalled === true)
    $ERROR('Test case was not executed');
