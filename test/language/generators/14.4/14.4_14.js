// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    If the source code matching the production GeneratorDeclaration :
    function * BindingIdentifier ( FormalParameters ) { FunctionBody
    }  is strict code, the Early Error rules for
    StrictFormalParameters : FormalParameters are applied.
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

function *foo(a,a) {}
