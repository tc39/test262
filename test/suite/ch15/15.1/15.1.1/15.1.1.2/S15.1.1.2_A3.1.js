// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Infinity is DontDelete
description: Use delete
flags: [noStrict]
---*/

// CHECK#1
if (delete Infinity !== false) {
	$ERROR('#1: delete Infinity === false. Actual: ' + (delete Infinity)); 
}
