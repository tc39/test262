// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Result of primitive conversion from object is a default value for the Object
 *
 * @section: 9.1;
 * @path: 09_Type_Conversion/9.1_ToPrimitive/S9.1_A1_T2.js;
 * @description: Using operator Number. This operator calls ToPrimitive with hint Number;
 */

// CHECK#1
var object = {valueOf: function() {return 0}, toString: function() {return 1}};
if (String(object) !== "1") {
  $ERROR('#1: var object = {valueOf: function() {return 0}, toString: function() {return 1}}; String(object) === "1". Actual: ' + (String(object)));
}

// CHECK#2
var object = {valueOf: function() {return 0}, toString: function() {return {}}};
if (String(object) !== "0") {
  $ERROR('#2: var object = {valueOf: function() {return 0}, toString: function() {return {}}}; String(object) === "0". Actual: ' + (String(object)));
}


