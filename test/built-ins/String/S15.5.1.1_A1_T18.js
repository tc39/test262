// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When String is called as a function rather than as a constructor, it
    performs a type conversion
es5id: 15.5.1.1_A1_T18
description: Call String() with numbers that have more than 1 significant digit
---*/

var __str = String(1000000000000000000000);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  throw new Test262Error('#1: __str = String(1000000000000000000000); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
assert.sameValue(__str, "1e+21", '#2: __str = String(1000000000000000000000); __str === "1e+21"');
//
//////////////////////////////////////////////////////////////////////////////

__str = String(10000000000000000000000);

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof __str !== "string") {
  throw new Test262Error('#3: __str = String(10000000000000000000000); typeof __str === "string". Actual: typeof __str ===' + typeof __str);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
assert.sameValue(__str, "1e+22", '#4: __str = String(10000000000000000000000); __str === "1e+22"');
//
//////////////////////////////////////////////////////////////////////////////
