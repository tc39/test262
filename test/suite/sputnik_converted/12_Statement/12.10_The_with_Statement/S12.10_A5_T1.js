// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A5_T1;
 * @section: 12.10;
 * @assertion: Deleting property using "eval" statement containing "with" statement;
 * @description: Deleting string property;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A5_T1",

path: "12.10",

description: "Deleting string property",

test: function testcase() {
   this.p1 = 1;
var myObj = {
  p1: 'a', 
  del:false
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 === 'a'){
  $ERROR('#1: myObj.p1 !== "a"');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  $ERROR('#2: myObj.p1 === undefined. Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  $ERROR('#3: myObj.del === true. Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 1){
  $ERROR('#4: myObj.p1 !== 1');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

