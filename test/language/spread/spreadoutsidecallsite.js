// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Spread operator should work only at call site
includes: [runTestCase.js]
---*/

function testcase() {
  var a = [];

  try{
    eval('...a');
  }catch(e){
    return true;
  }
  return false;

};
runTestCase(testcase);
