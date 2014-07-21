// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    An ExpressionStatement can not start with the function keyword because
    that might make it ambiguous with a FunctionDeclaration
description: Checking if execution of "function(){}()" fails
flags: [negative]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
function(){}();
//
//////////////////////////////////////////////////////////////////////////////
