// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Khojki`
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
    [0x000AE6, 0x000AEF],
    [0x00A830, 0x00A839],
    [0x011200, 0x011211],
    [0x011213, 0x011241]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Khojki}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Khojki}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Khoj}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Khoj}"
);
testPropertyEscapes(
  /^\p{scx=Khojki}+$/u,
  matchSymbols,
  "\\p{scx=Khojki}"
);
testPropertyEscapes(
  /^\p{scx=Khoj}+$/u,
  matchSymbols,
  "\\p{scx=Khoj}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x011212
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x000AE5],
    [0x000AF0, 0x00A82F],
    [0x00A83A, 0x00DBFF],
    [0x00E000, 0x0111FF],
    [0x011242, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Khojki}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Khojki}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Khoj}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Khoj}"
);
testPropertyEscapes(
  /^\P{scx=Khojki}+$/u,
  nonMatchSymbols,
  "\\P{scx=Khojki}"
);
testPropertyEscapes(
  /^\P{scx=Khoj}+$/u,
  nonMatchSymbols,
  "\\P{scx=Khoj}"
);
