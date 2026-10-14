// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

export { x } from "./eager-dep_FIXTURE.js";
export defer { y } from "./defer-dep_FIXTURE.js";
globalThis.evaluations.push("barrel");
