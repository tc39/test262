// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Global object properties have attributes { DontEnum }
description: Global execution context - Other Properties
---*/

var evalStr = 
'//CHECK#1\n'+
'for (var x in this) {\n'+
'  if ( x === \'Math\' ) {\n'+
'    $ERROR("#1: \'Math\' have attribute DontEnum");\n'+
'  }\n'+
'}\n';

eval(evalStr);
