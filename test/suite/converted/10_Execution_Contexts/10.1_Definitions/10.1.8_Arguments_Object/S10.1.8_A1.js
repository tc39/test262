// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When control enters an execution context for function code,
 * an arguments object is created and initialised
 *
 * @section: 10.1.8;
 * @path: 10_Execution_Contexts/10.1_Definitions/10.1.8_Arguments_Object/S10.1.8_A1.js;
 * @description: Executing function which uses arguments object;
 */

//CHECK#1
function f1(){
  return arguments;
}

try{
  var x = f1();
}
catch(e){
  $ERROR("#1: arguments doesn't exists");
}

//CHECK#2
var f2 = function(){
  return arguments;
}

try{
  var x = f2();
}
catch(e){
  $ERROR("#2: arguments doesn't exists");
}

