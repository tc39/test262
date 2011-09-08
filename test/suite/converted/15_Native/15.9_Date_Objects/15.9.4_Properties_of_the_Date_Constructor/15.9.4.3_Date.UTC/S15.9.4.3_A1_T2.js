// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date property "UTC" has { DontEnum } attributes
 *
 * @section: 15.9.4.3;
 * @path: 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.3_Date.UTC/S15.9.4.3_A1_T2.js;
 * @description: Checking absence of DontDelete attribute;
 */

if (delete Date.UTC  === false) {
  $ERROR('#1: The Date.UTC property has not the attributes DontDelete');
}

if (Date.hasOwnProperty('UTC')) {
  $FAIL('#2: The Date.UTC property has not the attributes DontDelete');
}


