// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Block within a "do-while" Expression is not allowed
 *
 * @id: S12.6.1_A15;
 * @section: 12.6.1;
 * @description: Using "{0}" Block as an Expression;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
do{
    ;
}while({0});
//
//////////////////////////////////////////////////////////////////////////////

