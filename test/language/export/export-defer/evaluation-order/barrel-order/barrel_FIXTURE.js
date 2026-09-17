// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export { b } from "./b_FIXTURE.js";
export defer { a } from "./a_FIXTURE.js";
globalThis.evaluations.push("barrel");
