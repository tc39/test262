// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Yezidi`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00060C,
    0x00061B,
    0x00061F
  ],
  ranges: [
    [0x000660, 0x000669],
    [0x010E80, 0x010EA9],
    [0x010EAB, 0x010EAD],
    [0x010EB0, 0x010EB1]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Yezidi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Yezidi}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Yezi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Yezi}"
);
testPropertyEscapes(
  /^\p{scx=Yezidi}+$/u,
  matchSymbols,
  "\\p{scx=Yezidi}"
);
testPropertyEscapes(
  /^\p{scx=Yezi}+$/u,
  matchSymbols,
  "\\p{scx=Yezi}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x010EAA
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00060B],
    [0x00060D, 0x00061A],
    [0x00061C, 0x00061E],
    [0x000620, 0x00065F],
    [0x00066A, 0x00DBFF],
    [0x00E000, 0x010E7F],
    [0x010EAE, 0x010EAF],
    [0x010EB2, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Yezidi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Yezidi}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Yezi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Yezi}"
);
testPropertyEscapes(
  /^\P{scx=Yezidi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Yezidi}"
);
testPropertyEscapes(
  /^\P{scx=Yezi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Yezi}"
);
