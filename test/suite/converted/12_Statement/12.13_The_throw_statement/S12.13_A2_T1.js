// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression
 *
 * @section: 12.13;
 * @path: 12_Statement/12.13_The_throw_statement/S12.13_A2_T1.js;
 * @description: Throwing undefined;
 */

// CHECK#1
try{
  throw undefined;
}
catch(e){
  if (e!==undefined) $ERROR('#1: Exception === undefined. Actual:  Exception ==='+ e  );
}

