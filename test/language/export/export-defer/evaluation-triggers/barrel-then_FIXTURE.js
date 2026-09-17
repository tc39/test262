// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.evaluations.push("barrel");

export defer { then } from "./dep-then_FIXTURE.js";
