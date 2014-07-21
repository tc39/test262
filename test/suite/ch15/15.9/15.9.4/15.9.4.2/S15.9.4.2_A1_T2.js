// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date property "parse" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.parse  === false) {
  $ERROR('#1: The Date.parse property has not the attributes DontDelete');
}

if (Date.hasOwnProperty('parse')) {
  $FAIL('#2: The Date.parse property has not the attributes DontDelete');
}
