// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Returns a boolean value (not a Boolean object) computed by
 * ToBoolean(value)
 *
 * @section: 15.6.1.1;
 * @path: 15_Native/15.6_Boolean_Objects/15.6.1_The_Boolean_Constructor_Called_as_a_Function/S15.6.1.1_A1_T1.js;
 * @description: Used values 1, new String("1"), new Object(1) and called without argument;
 */

//CHECK#1
if( typeof Boolean() !== "boolean" ) {
  $ERROR('#1: typeof Boolean() should be "boolean", actual is "'+typeof Boolean()+'"');
}

//CHECK#2
if( typeof Boolean(1) !== "boolean" ) {
  $ERROR('#2: typeof Boolean(1) should be "boolean", actual is "'+typeof Boolean(1)+'"');
}

//CHECK#3
if( typeof Boolean(new String("1")) !== "boolean" ) {
  $ERROR('#3: typeof Boolean(new String("1")) should be "boolean", actual is "'+typeof Boolean(new String("1"))+'"');
}

//CHECK#4
if( typeof Boolean(new Object(1)) !== "boolean" ) {
  $ERROR('#4: typeof Boolean(new Object(1)) should be "boolean", actual is "'+typeof Boolean(new Object(1))+'"');
}


