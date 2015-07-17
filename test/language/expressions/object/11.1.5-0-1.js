// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    it isn't clear what specific requirements of the specificaiton are being tested here. This test should 
    probably be replaced by some more targeted tests.  AllenWB
es5id: 11.1.5-0-1
description: Object literal - get set property
includes: [runTestCase.js]
---*/

function testcase() {
  var s1 = "In getter";
  var s2 = "In setter";
  var s3 = "Modified by setter";
  var o;
  eval("o = {get foo(){ return s1;},set foo(arg){return s2 = s3}};");
  if(o.foo !== s1) 
    return false;
  o.foo=10;
  if(s2 !== s3) 
    return false;
  return true;
 }
runTestCase(testcase);
