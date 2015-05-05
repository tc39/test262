// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    14.4.14 :  Let F be the result of performing the
    GeneratorFunctionCreate abstract operation with arguments Normal,
    FormalParameters, body, scope, and strict.
author: Nikhil Suryanarayanan
---*/

var gfoo = function*baz() {
}
if(gfoo.length !== 0)
    $ERROR('Length of function expected to be 0');
