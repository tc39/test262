// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The result of evaluating "for(var ExpNoIn;Exp;Exp)" loop is returning
    (normal, evalValue, empty)
es5id: 12.6.3_A9
description: Using eval
---*/

var supreme;
supreme=5;

//////////////////////////////////////////////////////////////////////////////
//CHECK#
try {
	var __evaluated =  eval("for(var count=0;;) {if (count===supreme)break;else count++; }");
	if (__evaluated !== 4) {
		$ERROR('#1: __evaluated === 4. Actual:  __evaluated ==='+ __evaluated  );
	}
} catch (e) {
	$ERROR('#1: var __evaluated =  eval("for(var count=0;;) {if (count===supreme)break;else count++; }"); does not lead to throwing exception');
}
//
//////////////////////////////////////////////////////////////////////////////
