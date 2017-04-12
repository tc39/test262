// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Old_Italic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010300, 0x010323]
  ]
});
testPropertyEscapes(
  /^\p{Script=Old_Italic}+$/u,
  matchSymbols,
  "\\p{Script=Old_Italic}"
);
testPropertyEscapes(
  /^\p{Script=Ital}+$/u,
  matchSymbols,
  "\\p{Script=Ital}"
);
testPropertyEscapes(
  /^\p{sc=Old_Italic}+$/u,
  matchSymbols,
  "\\p{sc=Old_Italic}"
);
testPropertyEscapes(
  /^\p{sc=Ital}+$/u,
  matchSymbols,
  "\\p{sc=Ital}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0102FF],
    [0x010324, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Old_Italic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Old_Italic}"
);
testPropertyEscapes(
  /^\P{Script=Ital}+$/u,
  nonMatchSymbols,
  "\\P{Script=Ital}"
);
testPropertyEscapes(
  /^\P{sc=Old_Italic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Old_Italic}"
);
testPropertyEscapes(
  /^\P{sc=Ital}+$/u,
  nonMatchSymbols,
  "\\P{sc=Ital}"
);
