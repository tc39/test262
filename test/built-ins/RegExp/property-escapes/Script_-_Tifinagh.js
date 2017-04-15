// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Tifinagh`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x002D7F
  ],
  ranges: [
    [0x002D30, 0x002D67],
    [0x002D6F, 0x002D70]
  ]
});
testPropertyEscapes(
  /^\p{Script=Tifinagh}+$/u,
  matchSymbols,
  "\\p{Script=Tifinagh}"
);
testPropertyEscapes(
  /^\p{Script=Tfng}+$/u,
  matchSymbols,
  "\\p{Script=Tfng}"
);
testPropertyEscapes(
  /^\p{sc=Tifinagh}+$/u,
  matchSymbols,
  "\\p{sc=Tifinagh}"
);
testPropertyEscapes(
  /^\p{sc=Tfng}+$/u,
  matchSymbols,
  "\\p{sc=Tfng}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x002D2F],
    [0x002D68, 0x002D6E],
    [0x002D71, 0x002D7E],
    [0x002D80, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Tifinagh}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tifinagh}"
);
testPropertyEscapes(
  /^\P{Script=Tfng}+$/u,
  nonMatchSymbols,
  "\\P{Script=Tfng}"
);
testPropertyEscapes(
  /^\P{sc=Tifinagh}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tifinagh}"
);
testPropertyEscapes(
  /^\P{sc=Tfng}+$/u,
  nonMatchSymbols,
  "\\P{sc=Tfng}"
);
