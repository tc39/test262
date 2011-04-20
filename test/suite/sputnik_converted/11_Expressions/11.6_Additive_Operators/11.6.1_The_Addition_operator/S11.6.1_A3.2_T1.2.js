// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.1_A3.2_T1.2;
 * @section: 11.6.1;
 * @assertion: If Type(Primitive(x)) is String or Type(Primitive(y)) is String, then operator x + y returns the result of concatenating ToString(x) followed by ToString(y); 
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between Object object and Function object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A3.2_T1.2",

path: "11_Expressions\11.6_Additive_Operators\11.6.1_The_Addition_operator\S11.6.1_A3.2_T1.2.js",

assertion: "If Type(Primitive(x)) is String or Type(Primitive(y)) is String, then operator x + y returns the result of concatenating ToString(x) followed by ToString(y)",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between Object object and Function object",

test: function testcase() {
   //CHECK#1
if (({} + function(){return 1}) !== ({}.toString() + function(){return 1}.toString())) {
  $ERROR('#1: ({} + function(){return 1}) === ({}.toString() + function(){return 1}.toString()). Actual: ' + (({} + function(){return 1})));
}

//CHECK#2
if ((function(){return 1} + {}) !== (function(){return 1}.toString() + {}.toString())) {
  $ERROR('#2: (function(){return 1} + {}) === (function(){return 1}.toString() + {}.toString()). Actual: ' + ((function(){return 1} + {})));
}

//CHECK#3
if ((function(){return 1} + function(){return 1}) !== (function(){return 1}.toString() + function(){return 1}.toString())) {
  $ERROR('#3: (function(){return 1} + function(){return 1}) === (function(){return 1}.toString() + function(){return 1}.toString()). Actual: ' + ((function(){return 1} + function(){return 1})));
}

//CHECK#4
if (({} + {}) !== ({}.toString() + {}.toString())) {
  $ERROR('#4: ({} + {}) === ({}.toString() + {}.toString()). Actual: ' + (({} + {})));
}



 }
});

