// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `IDS_Binary_Operator`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0031EF
  ],
  ranges: [
    [0x002FF0, 0x002FF1],
    [0x002FF4, 0x002FFD]
  ]
});
testPropertyEscapes(
  /^\p{IDS_Binary_Operator}+$/u,
  matchSymbols,
  "\\p{IDS_Binary_Operator}"
);
testPropertyEscapes(
  /^\p{IDSB}+$/u,
  matchSymbols,
  "\\p{IDSB}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002FEF],
    [0x002FF2, 0x002FF3],
    [0x002FFE, 0x0031EE],
    [0x0031F0, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{IDS_Binary_Operator}+$/u,
  nonMatchSymbols,
  "\\P{IDS_Binary_Operator}"
);
testPropertyEscapes(
  /^\P{IDSB}+$/u,
  nonMatchSymbols,
  "\\P{IDSB}"
);
