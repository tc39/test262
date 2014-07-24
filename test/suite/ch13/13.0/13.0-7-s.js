// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 13; 
    The production FunctionBody : SourceElementsopt is evaluated as follows:
es5id: 13.0-7-s
description: >
    Strict Mode - SourceElements is evaluated as strict mode code when
    the code of this FunctionDeclaration is contained in non-strict
    mode but the call to eval is a direct call in strict mode code
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            eval("'use strict'; function _13_0_7_fun() {eval = 42;};");
            _13_0_7_fun();
            return false;
        } catch (e) {
            return e instanceof SyntaxError;
        }
    }
runTestCase(testcase);
