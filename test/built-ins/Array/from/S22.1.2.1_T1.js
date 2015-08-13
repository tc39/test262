// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 22.1.2.1_T1
description: Testing Array.from when passed a String
author: Hank Yates (hankyates@gmail.com)
---*/

  var arrLikeSource = 'testValue',
      testArr = Array.from(arrLikeSource);

assert.sameValue(testArr.length, 9);
