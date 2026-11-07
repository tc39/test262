// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.evaluations.push('b');

export defer { x } from "./dep-c_FIXTURE.js";
