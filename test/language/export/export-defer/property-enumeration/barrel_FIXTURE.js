// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.evaluations.push("barrel");

export let direct = 1;
export defer { exported } from "./dep_FIXTURE.js";
