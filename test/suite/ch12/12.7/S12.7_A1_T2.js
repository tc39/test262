// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Appearing of continue without an IterationStatement leads to syntax error
description: >
    Checking if single "continue" with Label but without any
    IterationStatement fails
flags: [negative]
---*/

LABEL : x=3.14;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x=1;
continue LABEL;
var y=2;
//
//////////////////////////////////////////////////////////////////////////////
