// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export { e1 } from "./eager-1_FIXTURE.js";
export defer { d1 } from "./deferred-1_FIXTURE.js";
export { e2 } from "./eager-2_FIXTURE.js";
export defer { d2 } from "./deferred-2_FIXTURE.js";
globalThis.evaluations.push("barrel");
