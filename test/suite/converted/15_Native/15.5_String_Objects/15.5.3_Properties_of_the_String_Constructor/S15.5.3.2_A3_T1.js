// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.fromCharCode ( [ char0 [ , char1 [ , ... ] ] ] )
 *
 * @id: S15.5.3.2_A3_T1;
 * @section: 15.5.3.2;
 * @description: Call String.fromCharCode(65,66,66,65);
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.fromCharCode(65,66,66,65) !== "ABBA") {
  $ERROR('#1: String.fromCharCode(65,66,66,65) === "ABBA". Actual: String.fromCharCode(65,66,66,65) ==='+String.fromCharCode(65,66,66,65) ); 
}
//
//////////////////////////////////////////////////////////////////////////////


