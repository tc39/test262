// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Cuneiform`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x012000, 0x012399],
    [0x012400, 0x01246E],
    [0x012470, 0x012474],
    [0x012480, 0x012543]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Cuneiform}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Cuneiform}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Xsux}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Xsux}"
);
testPropertyEscapes(
  /^\p{scx=Cuneiform}+$/u,
  matchSymbols,
  "\\p{scx=Cuneiform}"
);
testPropertyEscapes(
  /^\p{scx=Xsux}+$/u,
  matchSymbols,
  "\\p{scx=Xsux}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x01246F
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x011FFF],
    [0x01239A, 0x0123FF],
    [0x012475, 0x01247F],
    [0x012544, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Cuneiform}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Cuneiform}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Xsux}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Xsux}"
);
testPropertyEscapes(
  /^\P{scx=Cuneiform}+$/u,
  nonMatchSymbols,
  "\\P{scx=Cuneiform}"
);
testPropertyEscapes(
  /^\P{scx=Xsux}+$/u,
  nonMatchSymbols,
  "\\P{scx=Xsux}"
);
