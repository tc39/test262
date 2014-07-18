// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Testing Array.from when passed a String
 * @author Hank Yates (hankyates@gmail.com)
 */

runTestCase(function () {
  var arrLikeSource = 'testValue',
      testArr = Array.from(arrLikeSource);

  if (testArr.length != 9) {
    return false;
  }

  return true;
});
