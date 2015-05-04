// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    14.4.12 :  4.    Let F be the result of performing the
    GeneratorFunctionCreate abstract operation with arguments Normal,
    FormalParameters, body, scope, and strict.
author: Nikhil Suryanarayanan
---*/

function *gfoo(a,a) {
}
if(gfoo.length !== 2)
    $ERROR('Length of function expected to be 2');
