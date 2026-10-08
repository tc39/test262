// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.evaluations.push("throws");
throw { someError: "the error from throws_FIXTURE" };
export const x = "never-reached";
