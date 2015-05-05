// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    14.4.1 - It is not a Syntax Error if any element of the BoundNames
    of StrictFormalParameters also occurs in the VarDeclaredNames of
    FunctionBody.
author: Nikhil Suryanarayanan
---*/

function *gfoo(a) {
    var a = 1;
}
