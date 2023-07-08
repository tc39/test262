// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    When "String" is called as part of a new expression, it is a constructor: it initialises the newly created object and
    The [[Value]] property of the newly constructed object is set to ToString(value), or to the empty string if value is not supplied
es5id: 15.5.2.1_A1_T10
description: >
    Creating string object with "new String(function object)" as the
    function object's prototype.toString property was changed
---*/

function __FACTORY() {};

__FACTORY.prototype.toString = function() {
  return "tostr"
};

var __obj = new __FACTORY;

var __str = new String(__obj);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "object") {
  throw new Test262Error('#1: __str = new String(__obj); typeof __str === "object". Actual: typeof __str ===' + typeof __str);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1.5
assert.sameValue(__str.constructor, String, '#1.5: __str = new String(__obj); __str.constructor === String');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str != "tostr") {
  throw new Test262Error('#2: __str = new String(__obj); __str =="tostr". Actual: __str ==' + __str);
}
//
//////////////////////////////////////////////////////////////////////////////
