// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The undefined is DontEnum
description: Use for-in statement
---*/

// CHECK#1
for (prop in this) {
  if (prop === "undefined") {
	$ERROR('#1: The undefined is DontEnum');
  }	 	
}
