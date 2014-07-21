// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1
    evaluates Expression
description: Throwing undefined
---*/

// CHECK#1
try{
  throw undefined;
}
catch(e){
  if (e!==undefined) $ERROR('#1: Exception === undefined. Actual:  Exception ==='+ e  );
}
