// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Uint8Array.fromBase64Into ignores ASCII whitespace in the input
includes: [compareArray.js]
features: [uint8array-base64]
---*/

var whitespaceKinds = [
  ["Z g==", "space"],
  ["Z\tg==", "tab"],
  ["Z\x0Ag==", "LF"],
  ["Z\x0Cg==", "FF"],
  ["Z\x0Dg==", "CR"],
];
whitespaceKinds.forEach(function(pair) {
  var target = new Uint8Array([255, 255, 255]);
  var result = Uint8Array.fromBase64Into(pair[0], target);
  assert.sameValue(result.read, 5);
  assert.sameValue(result.written, 1);
  assert.compareArray(target, [102, 255, 255], "ascii whitespace: " + pair[1]);
});
