// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Check For Statement for automatic semicolon insertion.
    If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
    Use one semicolon
description: For header is (semicolon \n)
flags: [negative]
---*/

//CHECK#1
for(;
) {
  break;
}
