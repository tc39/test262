// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.8_A3_T4;
 * @section: 10.1.8;
 * @assertion: A property is created with name callee with property 
 * attributes { DontEnum } and no others;
 * @description: Overriding arguments.callee property;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.8_A3_T4",

path: "10.1.8",

description: "Overriding arguments.callee property",

test: function testcase() {
   var str = "something different";
//CHECK#1
function f1(){
  arguments.callee = str;
  return arguments; 
}

try{
  if(f1().callee !== str){
    $ERROR("#1: A property callee have attribute { ReadOnly }");
  }
}
catch(e){
  $ERROR("#1: arguments object don't exists");
}

//CHECK#2
var f2 = function(){
    arguments.callee = str;
    return arguments; 
  }
try{
  if(f2().callee !== str){
    $ERROR("#2: A property callee have attribute { ReadOnly }");
  }
}
catch(e){
  $ERROR("#2: arguments object don't exists");
}

 }
});

