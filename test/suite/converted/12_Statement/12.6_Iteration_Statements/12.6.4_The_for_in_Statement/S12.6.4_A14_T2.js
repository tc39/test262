// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * FunctionExpession within a "for-in" Expression is allowed
 *
 * @id: S12.6.4_A14_T2;
 * @section: 12.6.4;
 * @description: : Using "function __func(){return {a:1};}()" as Expession;;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
for(x in function __func(){return {a:1};}()){
    var __reached = x;
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__reached !== "a") {
	$ERROR('#2: function expession inside of for-in expression allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

