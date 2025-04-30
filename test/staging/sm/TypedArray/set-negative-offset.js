// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
  - noStrict
description: |
  %TypedArray%.prototype.set must throw a RangeError when passed a negative offset
esid: pending
---*/

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

try
{
  new Uint8Array().set([], -1);
  throw new Error("didn't throw at all");
}
catch (e)
{
  assert.sameValue(e instanceof RangeError, true,
           "expected RangeError, instead got: " + e);
}
