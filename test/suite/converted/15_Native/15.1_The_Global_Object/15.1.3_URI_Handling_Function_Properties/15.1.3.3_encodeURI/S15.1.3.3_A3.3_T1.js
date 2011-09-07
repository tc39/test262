// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * unescapedURISet containing "#"
 *
 * @id: S15.1.3.3_A3.3_T1;
 * @section: 15.1.3.3;
 * @description: encodeURI("#") === "#";
 */

if (encodeURI("#") !== "#") {
  $ERROR('#1: unescapedURISet containing "#"');
}  

