// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If thisArg is null or undefined, the called function is passed the global object as the this value
 *
 * @id: S15.3.4.4_A3_T9;
 * @section: 15.3.4.4;
 * @description: Checking by using eval, argument at call function is void 0;
 */

eval( " Function(\"this.feat=1\").call(void 0) " );


//CHECK#1
if (this["feat"] !== 1) {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

