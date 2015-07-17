// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-22-s
description: >
    arguments as global var identifier throws SyntaxError in strict
    mode
includes: [runTestCase.js]
---*/

function testcase() {

    var indirectEval = eval;
	
    try {
	    indirectEval("'use strict'; var arguments;");
        return false;
	}
    catch (e) {
        return (e instanceof SyntaxError);
	}
}
runTestCase(testcase);
