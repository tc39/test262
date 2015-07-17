// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Refer 11.1.5; 
    The production
    PropertyAssignment : PropertyName : AssignmentExpression 
    4.Let desc be the Property Descriptor{[[Value]]: propValue, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true}
es5id: 11.1.5_5-4-1
description: Object literal - property descriptor for assignment expression
includes: [runTestCase.js]
---*/

function testcase() {

  var o = {foo : 1};
  var desc = Object.getOwnPropertyDescriptor(o,"foo");
  if(desc.value === 1 &&
     desc.writable === true &&
     desc.enumerable === true &&
     desc.configurable === true)
    return true;
 }
runTestCase(testcase);
