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
var summary = 'String.prototype.normalize - not listed in part1';

print(BUGNUMBER + ": " + summary);

function test() {
  loadRelativeToScript('normalize-generateddata-input.js');

  var part1 = new Set();
  for (var test1 of tests_part1) {
    part1.add(test1.source[0]);
  }

  /* not listed in Part 1 */
  for (var x = 0; x <= 0x2FFFF; x++) {
    if (part1.has(x)) {
      continue;
    }
    var xstr = x.toString(16);
    var c = String.fromCodePoint(x);
    assert.sameValue(c.normalize(), c, "NFC of " + xstr);
    assert.sameValue(c.normalize(undefined), c, "NFC of " + xstr);
    assert.sameValue(c.normalize("NFC"), c, "NFC of " + xstr);
    assert.sameValue(c.normalize("NFD"), c, "NFD of " + xstr);
    assert.sameValue(c.normalize("NFKC"), c, "NFKC of " + xstr);
    assert.sameValue(c.normalize("NFKD"), c, "NFKD of " + xstr);
  }
}

if ("normalize" in String.prototype) {
  // String.prototype.normalize is not enabled in all builds.
  test();
}

