// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Refer 11.1.5; 
    The production
    PropertyAssignment : set PropertyName( PropertySetParameterList ) { FunctionBody } 
    3.Let desc be the Property Descriptor{[[Set]]: closure, [[Enumerable]]: true, [[Configurable]]: true}
es5id: 11.1.5_7-3-1
description: Object literal - property descriptor for set property assignment
includes: [runTestCase.js]
---*/

function testcase() {
  var o;
  eval("o = {set foo(arg){return 1;}};");
  var desc = Object.getOwnPropertyDescriptor(o,"foo");
  if(desc.enumerable === true &&
     desc.configurable === true)
    return true;
 }
runTestCase(testcase);
