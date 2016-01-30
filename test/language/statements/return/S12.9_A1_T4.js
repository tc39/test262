// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T4
description: Checking if execution of "return" with no function fails
negative:
  stage: early
  type: SyntaxError
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
return;
//
//////////////////////////////////////////////////////////////////////////////
