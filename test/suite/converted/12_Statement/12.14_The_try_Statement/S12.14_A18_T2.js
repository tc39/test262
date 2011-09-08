// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Catching objects with try/catch/finally statement
 *
 * @section: 12.14, 12.13;
 * @path: 12_Statement/12.14_The_try_Statement/S12.14_A18_T2.js;
 * @description: Catching null;
 */

// CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception ===null. Actual: '+e);
}

