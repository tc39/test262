// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6_A3_T1;
* @section: 8.6, 11.4.4;
* @assertion: Do not crash with pefixincrement custom property;
* @description: Try to implement pefixincrement for custom property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6_A3_T1",

path: "8.6, 11.4.4",

description: "Try to implement pefixincrement for custom property",

test: function testcase() {
   var __map={foo:'bar'};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1

++__map.foo;
if (!isNaN(__map.foo)) {
  $ERROR('#1:  var __map={foo:"bar"}; ++__map.foo; __map.foo === Not-a-Number. Actual: ' + (__map.foo));
}

//
//////////////////////////////////////////////////////////////////////////////

 }
});

