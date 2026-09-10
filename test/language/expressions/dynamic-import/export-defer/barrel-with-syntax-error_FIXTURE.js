// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.evaluations.push("barrel-with-syntax-error");

export let y = 1;
export defer { x } from "./dep-syntax-error_FIXTURE.js";
