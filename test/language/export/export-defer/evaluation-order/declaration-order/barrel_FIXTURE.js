// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export defer { a } from "./dep-1_FIXTURE.js";
export defer { b } from "./dep-2_FIXTURE.js";
export defer { c } from "./dep-3_FIXTURE.js";
globalThis.evaluations.push("barrel");
