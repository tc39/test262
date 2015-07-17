// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-13-b-3-s
description: arguments.caller is non-configurable in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(arguments,"caller");
  
  return (desc.configurable === false && 
     desc.enumerable === false && 
     desc.hasOwnProperty('value') == false  && 
     desc.hasOwnProperty('writable') == false &&
     desc.hasOwnProperty('get') == true && 
     desc.hasOwnProperty('set') == true);                                     
    
 }
runTestCase(testcase);
