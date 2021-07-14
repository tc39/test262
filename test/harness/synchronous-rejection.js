// Copyright (C) 2021 the V8 project authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Synchronous tests should fail if they include unhandled Promise rejections.
negative:
  phase: runtime
  type: Test262Error
---*/

Promise.reject(new Test262Error('This rejection should cause the test to fail.'));
