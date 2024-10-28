// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

import defer * as ns from "./dep_FIXTURE.js";

await Promise.resolve(0);

assert.throws(TypeError, () => ns.foo);
