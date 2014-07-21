// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production Block can't be inside of expression
description: Checking if execution of "y={x}" fails
flags: [negative]
---*/

x=1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
y={x};
//
//////////////////////////////////////////////////////////////////////////////
