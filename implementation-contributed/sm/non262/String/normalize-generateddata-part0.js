// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-String-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  uses shell load() function
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 918987;
var summary = 'String.prototype.normalize - part0';

print(BUGNUMBER + ": " + summary);

function test() {
  loadRelativeToScript('normalize-generateddata-input.js');

  for (var test0 of tests_part0) {
    runNormalizeTest(test0);
  }
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

