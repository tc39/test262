// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: let P be ToString(pattern) and let F be ToString(flags)
es5id: 15.10.4.1_A8_T6
description: >
    Pattern is {toString:function(){throw "intostr";} } and flags is
    "i"
---*/

//CHECK#1
try {
	$ERROR('#1.1: new RegExp({toString:function(){throw "intostr";}}, "i") throw "intostr". Actual: ' + (new RegExp({toString:function(){throw "intostr";}}, "i")));
} catch (e) {
	if (e !== "intostr" ) {
		$ERROR('#1.2: new RegExp({toString:function(){throw "intostr";}}, "i") throw "intostr". Actual: ' + (e));
	}
}
