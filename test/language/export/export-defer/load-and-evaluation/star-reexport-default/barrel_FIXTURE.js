// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

globalThis.evaluations.push('barrel');

export var marker = 'barrel-loaded';
export defer { foo as default } from "../dep-syntax-error_FIXTURE.js";
