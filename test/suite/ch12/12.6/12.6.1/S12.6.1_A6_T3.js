// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Expression in "do-while" IterationStatement is bracketed with braces
description: Checking if execution of "do{}while true" fails
flags: [negative]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do break; while true;
//
//////////////////////////////////////////////////////////////////////////////
