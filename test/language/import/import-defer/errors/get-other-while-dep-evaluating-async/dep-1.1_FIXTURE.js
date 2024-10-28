// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

import { first, third, rejectDone, resolveDone } from "./promises_FIXTURE.js";
import defer * as ns from "./dep-1.1.1-tla_FIXTURE.js";

// dep-1 is now in the ~evaluating~ state
assert.throws(TypeError, () => ns.foo);

first.then(() => {
  // dep-1 is now in the ~evaluating-async~ state
  assert.throws(TypeError, () => ns.foo);
}).then(() => {
  return third.then(() => {
    // dep-1 is now in the ~evaluated~ state
    let foo = ns.foo;
    assert(foo === 1, "Once it finished evaluating, the module can be accessed");
  })
}).then(resolveDone, rejectDone);
