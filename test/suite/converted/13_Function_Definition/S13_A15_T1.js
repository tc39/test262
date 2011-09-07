// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * ''arguments'' variable overrides ActivationObject.arguments
 *
 * @id: S13_A15_T1;
 * @section: 13;
 * @description: Declaring a function with "__func(arguments)";
 */

function __func(arguments){
    return arguments;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(42) !== 42) {
	$ERROR('#1: "arguments" variable overrides ActivationObject.arguments');
}
//
//////////////////////////////////////////////////////////////////////////////

