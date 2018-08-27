// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-object.keys
description: >
  Test Object.keys() with uninitialized binding.
info: |
  [[OwnPropertyKeys]] ( ) of Module Namespace Exotic Object:
  1. Let keys be a copy of O.[[Exports]].
  2. For each own property key P of O that is a Symbol, in ascending chronological order of property creation, do
    a. Add P as the last element of keys.
  3. Return keys.

flags: [module]
---*/

import * as self from "./object-keys-binding-uninit.js";

const keys = Object.keys(self);
assert_equal(keys[0], 'a');
assert_equal(keys[1], 'default');

export default 0;
export const a = 1;
