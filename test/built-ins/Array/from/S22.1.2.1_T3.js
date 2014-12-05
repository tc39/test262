// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 22.1.2.1_T3
description: Testing Array.from when passed an undefined
author: Hank Yates (hankyates@gmail.com)
includes: [runTestCase.js]
---*/

runTestCase(function () {
  try {
    Array.from(undefined);
  } catch (e) {
    return e instanceof TypeError;
  }

  return false;

});
