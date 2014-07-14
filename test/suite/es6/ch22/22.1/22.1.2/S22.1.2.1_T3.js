// Copyright (c) 2014 Hank Yates. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*
 * @description Testing Array.from when passed an undefined
 * @author Hank Yates (hankyates@gmail.com)
 * /

runTestCase(function () {
  try {
    Array.from(undefined);
  } catch (e) {
    return e instanceof TypeError;
  }

  return false;

});

