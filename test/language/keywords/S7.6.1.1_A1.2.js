// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The "case" token can not be used as identifier
es5id: 7.6.1.1_A1.2
description: Checking if execution of "case=1" fails
negative:
  stage: early
  type: SyntaxError
---*/

case = 1;
