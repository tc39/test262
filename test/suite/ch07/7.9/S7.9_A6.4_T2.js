// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check For Statement for automatic semicolon insertion
description: >
    Three semicolons. For header is (false semicolon false two
    semicolons false)
flags: [negative]
---*/

//CHECK#1
for(false;false;;false) {
  break;
}
