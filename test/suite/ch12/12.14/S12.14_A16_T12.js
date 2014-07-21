// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
description: Embedded "try" statements followed by two "catch" statements
flags: [negative]
---*/

// CHECK#1
try
{
  try
  {
  }
}
catch(e1){}
catch(e2){}
