// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A5_T3;
 * @section: 12.10;
 * @assertion: Deleting property using "eval" statement containing "with" statement;
 * @description: Deleting boolean property;
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A5_T3",

path: "12_Statement\12.10_The_with_Statement\S12.10_A5_T3.js",

assertion: "Deleting property using \"eval\" statement containing \"with\" statement",

description: "Deleting boolean property",

test: function testcase() {
   this.p1 = 'a';
var myObj = {
  p1: true,
  del:false 
}

eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 === true){
  $ERROR('#1: myObj.p1 !== true ');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  $ERROR('#2: myObj.p1 === undefined . Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  $ERROR('#3: myObj.del === true . Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 'a'){
  $ERROR('#4: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

