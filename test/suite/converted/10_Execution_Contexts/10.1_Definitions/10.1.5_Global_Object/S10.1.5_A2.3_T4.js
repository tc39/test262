// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Global object properties have attributes { DontEnum }
 *
 * @section 10.1.5, 15.1
 * @path 10_Execution_Contexts/10.1_Definitions/10.1.5_Global_Object/S10.1.5_A2.3_T4.js
 * @description Global execution context - Other Properties
 */

var evalStr = 
'//CHECK#1\n'+
'for (var x in this) {\n'+
'  if ( x === \'Math\' ) {\n'+
'    $ERROR("#1: \'Math\' have attribute DontEnum");\n'+
'  }\n'+
'}\n';

eval(evalStr);

