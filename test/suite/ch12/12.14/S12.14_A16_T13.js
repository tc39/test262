// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
description: >
    Catch: "catch (Identifier ) Block". Checking if execution of "22"
    passes at the place of Identifier of "catch"
flags: [negative]
---*/

// CHECK#1
try
{
}
catch("22")
{
}
