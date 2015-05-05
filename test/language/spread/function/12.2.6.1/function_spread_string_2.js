// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Literals are coerced to objects - Spreading String
author: Nikhil Suryanarayanan
---*/

function foo() {
    return arguments.length === 6 && typeof arguments[0] === "string" ;
 }

 if( foo(..."string") !== true)
    $ERROR('Spreading a string in function call failed');
