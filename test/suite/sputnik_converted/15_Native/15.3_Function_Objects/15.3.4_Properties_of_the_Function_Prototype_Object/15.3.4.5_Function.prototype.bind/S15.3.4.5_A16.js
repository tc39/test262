// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.5_A16;
* @section: 15.3.4.5;
* @assertion: If IsCallable(func) is false, then throw a TypeError exception.
* @description: A RegExp is not a function, but it may be callable. Iff it is, it's typeof should be 'function', in which case bind should accept it as a valid this value.
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.5_A16",

path: "TestCases/15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.5_Function.prototype.bind/S15.3.4.5_A16.js",

assertion: "If IsCallable(func) is false, then throw a TypeError exception.",

description: "A RegExp is not a function, but it may be callable. Iff it is, it\'s typeof should be \'function\', in which case bind should accept it as a valid this value.",

test: function testcase() {
   var re = (/x/);
if (typeof re === 'function') {
  Function.prototype.bind.call(re, undefined);
} else {
  try {
    Function.prototype.bind.call(re, undefined);
    $FAIL('#1: If IsCallable(func) is false, ' +
          'then (bind should) throw a TypeError exception');
  } catch (e) {
    if (!(e instanceof TypeError)) {
      $ERROR('#1: TypeError expected. Actual: ' + e);
    }
  }
}

 }
});

