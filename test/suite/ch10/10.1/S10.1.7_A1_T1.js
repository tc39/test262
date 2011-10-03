// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The this value associated with an executioncontext is immutable
 *
 * @path 10_Execution_Contexts/10.1_Types_of_Executable_Code/S10.1.7_A1_T1.js
 * @description Checking if deleting "this" fails
 */

//CHECK#1
if (delete this !== true)
  $ERROR('#1: The this value associated with an executioncontext is immutable. Actual: this was deleted');
  

