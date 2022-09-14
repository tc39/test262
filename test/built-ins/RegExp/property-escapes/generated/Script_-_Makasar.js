// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Makasar`
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
    [0x011EE0, 0x011EF8]
  ]
});
testPropertyEscapes(
  /^\p{Script=Makasar}+$/u,
  matchSymbols,
  "\\p{Script=Makasar}"
);
testPropertyEscapes(
  /^\p{Script=Maka}+$/u,
  matchSymbols,
  "\\p{Script=Maka}"
);
testPropertyEscapes(
  /^\p{sc=Makasar}+$/u,
  matchSymbols,
  "\\p{sc=Makasar}"
);
testPropertyEscapes(
  /^\p{sc=Maka}+$/u,
  matchSymbols,
  "\\p{sc=Maka}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011EDF],
    [0x011EF9, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Makasar}+$/u,
  nonMatchSymbols,
  "\\P{Script=Makasar}"
);
testPropertyEscapes(
  /^\P{Script=Maka}+$/u,
  nonMatchSymbols,
  "\\P{Script=Maka}"
);
testPropertyEscapes(
  /^\P{sc=Makasar}+$/u,
  nonMatchSymbols,
  "\\P{sc=Makasar}"
);
testPropertyEscapes(
  /^\P{sc=Maka}+$/u,
  nonMatchSymbols,
  "\\P{sc=Maka}"
);
