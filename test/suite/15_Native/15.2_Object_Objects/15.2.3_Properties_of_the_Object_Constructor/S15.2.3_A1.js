// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Object constructor has the property "prototype"
 *
 * @path 15_Native/15.2_Object_Objects/15.2.3_Properties_of_the_Object_Constructor/S15.2.3_A1.js
 * @description Checking existence of the property "prototype"
 */

if(!Object.hasOwnProperty("prototype")){
  $ERROR('#1: The Object constructor has the property "prototype"');
}

