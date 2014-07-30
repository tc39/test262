// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 22.1.2.3_T2
description: Testing Array#of when passed single argument
author: Hank Yates (hankyates@gmail.com)
includes: [runTestCase.js]
---*/

runTestCase(function () {
  var testArr = Array.of(3);

  if (testArr.length !== 1) {
    return false;
  }

  if (testArr[0] !== 3) {
    return false;
  }

  return true;

});
