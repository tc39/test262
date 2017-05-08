// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

function getPrecision(num) {
	//TODO: Create a table of prec's,
	//      because using Math for testing Math isn't that correct.

	var log2num = Math.log(Math.abs(num)) / Math.LN2;
	var pernum = Math.ceil(log2num);
	return Math.pow(2, -53 + pernum);
}
