// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 22.1.2.3_T1
description: Testing Array#of when passed Strings
author: Hank Yates (hankyates@gmail.com)
includes: [runTestCase.js]
---*/

runTestCase(function () {
  var testArr = Array.of('testString', 'anotherTestString');

  if (testArr[0] !== 'testString') {
    return false;
  }

  if (testArr[1] !== 'anotherTestString') {
    return false;
  }

  return true;

});
