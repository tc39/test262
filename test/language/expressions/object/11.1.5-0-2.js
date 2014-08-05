// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    it isn't clear what specific requirements of the specificaiton are being tested here. This test should 
    probably be replaced by some more targeted tests.  AllenWB
es5id: 11.1.5-0-2
description: Object literal - multiple get set properties
includes: [runTestCase.js]
---*/

function testcase() {
  var s1 = "First getter";
  var s2 = "First setter";
  var s3 = "Second getter";
  var o;
  eval("o = {get foo(){ return s1;},set foo(arg){return s2 = s3}, get bar(){ return s3}, set bar(arg){ s3 = arg;}};");
  if(o.foo !== s1) 
    return false;
  o.foo = 10;
  if(s2 !== s3) 
    return false;
  if(o.bar !== s3)
    return false;
  o.bar = "Second setter";
  if(o.bar !== "Second setter")
    return false;
  return true;
 }
runTestCase(testcase);
