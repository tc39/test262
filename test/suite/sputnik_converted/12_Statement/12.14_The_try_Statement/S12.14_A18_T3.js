// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A18_T3;
 * @section: 12.14, 12.13;
 * @assertion: Catching objects with try/catch/finally statement;
 * @description: Catching boolean; 
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A18_T3",

path: "12_Statement\12.14_The_try_Statement\S12.14_A18_T3.js",

assertion: "Catching objects with try/catch/finally statement",

description: "Catching boolean",

test: function testcase() {
   // CHECK#1
try{
  throw true;
}
catch(e){
  if (e!==true) $ERROR('#1: Exception ===true. Actual:  Exception ==='+ e  );
}

// CHECK#2
try{
  throw false;
}
catch(e){
  if (e!==false) $ERROR('#2: Exception ===false. Actual:  Exception ==='+ e  );
}

// CHECK#3
var b=false;
try{
  throw b;
}
catch(e){
  if (e!==false) $ERROR('#3: Exception ===false. Actual:  Exception ==='+ e  );
}

// CHECK#4
var b=true;
try{
  throw b;
}
catch(e){
  if (e!==true) $ERROR('#4: Exception ===true. Actual:  Exception ==='+ e  );
}

// CHECK#5
var b=true;
try{
  throw b&&false;
}
catch(e){
  if (e!==false) $ERROR('#5: Exception ===false. Actual:  Exception ==='+ e  );
}

// CHECK#5
var b=true;
try{
  throw b||false;
}
catch(e){
  if (e!==true) $ERROR('#6: Exception ===true. Actual:  Exception ==='+ e  );
}

 }
});

