// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date property "UTC" has { DontEnum } attributes
description: Checking absence of ReadOnly attribute
---*/

x = Date.UTC;
if(x === 1)
  Date.UTC = 2;
else
  Date.UTC = 1;
if (Date.UTC === x) {
  $ERROR('#1: The Date.UTC has not the attribute ReadOnly');
}
