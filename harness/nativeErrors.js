// Copyright (C) 2026 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Array containing every Error constructor specified by the language.
    AggregateError and SuppressedError are intentionally omitted because they
    require separate feature flags; tests that need them should concatenate
    them explicitly behind a runtime check.
defines: [nativeErrors]
---*/

var nativeErrors = [
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError
];
