// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `ASCII_Hex_Digit`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x000030, 0x000039],
    [0x000041, 0x000046],
    [0x000061, 0x000066]
  ]
});
testPropertyEscapes(
  /^\p{ASCII_Hex_Digit}+$/u,
  matchSymbols,
  "\\p{ASCII_Hex_Digit}"
);
testPropertyEscapes(
  /^\p{AHex}+$/u,
  matchSymbols,
  "\\p{AHex}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00002F],
    [0x00003A, 0x000040],
    [0x000047, 0x000060],
    [0x000067, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{ASCII_Hex_Digit}+$/u,
  nonMatchSymbols,
  "\\P{ASCII_Hex_Digit}"
);
testPropertyEscapes(
  /^\P{AHex}+$/u,
  nonMatchSymbols,
  "\\P{AHex}"
);
