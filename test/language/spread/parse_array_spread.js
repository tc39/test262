// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: parser test cases of spread in array
includes: [runTestCase.js]
---*/

function testcase() {

  var pass = true;

  try{
    eval("[..[1]]");
    pass = false;
  }catch(e){
    if(!(e instanceof SyntaxError))
        pass = false;
  }

  try{
    eval("[....[1]]");
    pass = false;
  }catch(e){
    if(!(e instanceof SyntaxError))
        pass = false;
  }

  try{
    eval("[......[1]]");
    pass = false;
  }catch(e){
    if(!(e instanceof SyntaxError))
        pass = false;
  }

  return pass;


};
runTestCase(testcase);
