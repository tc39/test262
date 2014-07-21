// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If Expression is omitted, the return value is undefined
description: Return without Expression
---*/

__evaluated = (function (){return;})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__evaluated !== undefined) {
	$ERROR('#1: If Expression is omitted, the return value is undefined');
}
//
//////////////////////////////////////////////////////////////////////////////
