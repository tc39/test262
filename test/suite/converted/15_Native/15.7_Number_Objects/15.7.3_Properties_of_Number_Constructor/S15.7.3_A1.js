// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Number constructor has the property "prototype"
 *
 * @section: 15.7.3;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/S15.7.3_A1.js;
 * @description: Checking existence of the property "prototype";
 */

if(!Number.hasOwnProperty("prototype")){
  $ERROR('#1: The Number constructor has the property "prototype"');
}


