// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date constructor has the property "parse"
 *
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/S15.9.4_A2.js
 * @description Checking existence of the property "parse"
 */

if(!Date.hasOwnProperty("parse")){
  $ERROR('#1: The Date constructor has the property "parse"');
}


