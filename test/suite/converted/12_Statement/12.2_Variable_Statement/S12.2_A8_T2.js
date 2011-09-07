// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Only AssignmentExpression is admitted when variable is initialized
 *
 * @id: S12.2_A8_T2;
 * @section: 12.2;
 * @description: Checking if execution of "var x | true" fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x | true;
//
//////////////////////////////////////////////////////////////////////////////

