// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date constructor has the property "UTC"
 *
 * @section: 15.9.4;
 * @path: 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/S15.9.4_A3.js;
 * @description: Checking existence of the property "UTC";
 */

if(!Date.hasOwnProperty("UTC")){
  $ERROR('#1: The Date constructor has the property "UTC"');
}


