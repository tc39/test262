// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Catching objects with try/catch/finally statement
description: Catching undefined
---*/

// CHECK#1
try{
  throw undefined;
}
catch(e){
  if (e!==undefined) $ERROR('#1: Exception === undefined. Actual: '+e);
}
