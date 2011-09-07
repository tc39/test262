// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Catching objects with try/catch/finally statement
 *
 * @id: S12.14_A18_T2;
 * @section: 12.14, 12.13;
 * @description: Catching null;
 */

// CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception ===null. Actual: '+e);
}

