// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The length property of the find method is 1
---*/

if ([].find.length !== 1) {
	$ERROR('1: [].find.length !== 1. Actual: ' + [].find.length);
}
