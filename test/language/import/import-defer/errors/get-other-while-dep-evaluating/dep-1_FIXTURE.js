// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

import defer * as dep2 from "./dep-2_FIXTURE.js";

globalThis.dep3evaluated = false;
assert.throws(TypeError, () => dep2.foo);
assert.sameValue(globalThis.dep3evaluated, false, "the 'evaluable' dependencies of dep-2 are not evaluated");
