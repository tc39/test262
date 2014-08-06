// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 22.1.3.6_T1
description: Testing Array#fill
author: Hank Yates (hankyates@gmail.com)
includes: [runTestCase.js]
---*/

runTestCase(function () {
  var testArr = new Array('testString', 'anotherTestString', 3),
      updatedArr = testArr.fill('newValue', 1, 3);

  if (updatedArr[3] !== void 0) {
    return false;
  }

  if (updatedArr[2] !== 'newValue') {
    return false;
  }

  if (updatedArr[1] !== 'newValue') {
    return false;
  }

  if (updatedArr[0] !== 'testString') {
    return false;
  }

  if (updatedArr.length !== 3) {
    return false;
  }

  return true;

});
