// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * {} within the "if" expression is not allowed
 *
 * @section: 12.5;
 * @path: 12_Statement/12.5_The_if_Statement/S12.5_A11.js;
 * @description: Checking if execution of "if({1})" fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if({1})
  {
    ;
  }else
  {
    ;
  }
//
//////////////////////////////////////////////////////////////////////////////

