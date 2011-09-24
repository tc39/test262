// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Global object properties have attributes { DontEnum }
 *
 * @path 10_Execution_Contexts/10.2_Lexical_Environments/10.2.3_The_Global_Environment/S10.1.5_A2.3_T4.js
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

