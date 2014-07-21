// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Appearing of continue without an IterationStatement leads to syntax error
description: >
    Checking if execution of single "continue" without any
    IterationStatement fails
flags: [negative]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x=1;
continue;
var y=2;
//
//////////////////////////////////////////////////////////////////////////////
