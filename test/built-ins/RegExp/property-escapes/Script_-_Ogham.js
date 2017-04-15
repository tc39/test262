// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Ogham`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001680, 0x00169C]
  ]
});
testPropertyEscapes(
  /^\p{Script=Ogham}+$/u,
  matchSymbols,
  "\\p{Script=Ogham}"
);
testPropertyEscapes(
  /^\p{Script=Ogam}+$/u,
  matchSymbols,
  "\\p{Script=Ogam}"
);
testPropertyEscapes(
  /^\p{sc=Ogham}+$/u,
  matchSymbols,
  "\\p{sc=Ogham}"
);
testPropertyEscapes(
  /^\p{sc=Ogam}+$/u,
  matchSymbols,
  "\\p{sc=Ogam}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00167F],
    [0x00169D, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Ogham}+$/u,
  nonMatchSymbols,
  "\\P{Script=Ogham}"
);
testPropertyEscapes(
  /^\P{Script=Ogam}+$/u,
  nonMatchSymbols,
  "\\P{Script=Ogam}"
);
testPropertyEscapes(
  /^\P{sc=Ogham}+$/u,
  nonMatchSymbols,
  "\\P{sc=Ogham}"
);
testPropertyEscapes(
  /^\P{sc=Ogam}+$/u,
  nonMatchSymbols,
  "\\P{sc=Ogam}"
);
