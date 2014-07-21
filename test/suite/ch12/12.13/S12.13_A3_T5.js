// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: 1. Evaluate Expression
description: Evaluating equation expression
---*/

// CHECK#1
var a=true;
var b=false;
try{
  throw ((a&&(!b))?"exception":" #1");
}
catch(e){
  if (e!=="exception") $ERROR('#1: Exception ==="exception"(operaton ? , ). Actual:  Exception ==='+e  );
}
