// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
// Field syntax doesn't crash the engine when fields are disabled.

// Are fields enabled?
let fieldsEnabled = false;
try {
  Function("class C { x; }");
  fieldsEnabled = true;
} catch (exc) {
  assert.sameValue(exc instanceof SyntaxError, true);
}

// If not, run these tests. (Many other tests cover actual behavior of the
// feature when enabled.)
if (!fieldsEnabled) {
  let source = `class C {
    x
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    x = 0;
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    0 = 0;
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    [0] = 0;
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    "hi" = 0;
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    "hi" = 0;
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    d = function(){};
  }`;
  assert.throws(SyntaxError, () => Function(source));

  source = `class C {
    d = class D { x = 0; };
  }`;
  assert.throws(SyntaxError, () => Function(source));
}

