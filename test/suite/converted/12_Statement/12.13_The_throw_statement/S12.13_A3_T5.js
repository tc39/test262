// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * 1. Evaluate Expression
 *
 * @section 12.13
 * @path 12_Statement/12.13_The_throw_statement/S12.13_A3_T5.js
 * @description Evaluating equation expression
 */

// CHECK#1
var a=true;
var b=false;
try{
  throw ((a&&(!b))?"exception":" #1");
}
catch(e){
  if (e!=="exception") $ERROR('#1: Exception ==="exception"(operaton ? , ). Actual:  Exception ==='+e  );
}

