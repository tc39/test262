// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Objects that implement internal method [[Construct]] are called
    constructors. Math object is NOT constructor
description: Checking if execution of "var objMath=new Math" passes
flags: [negative]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var objMath=new Math;

//////////////////////////////////////////////////////////////////////////////
