// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ahom`
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
    [0x011700, 0x01171A],
    [0x01171D, 0x01172B],
    [0x011730, 0x011746]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Ahom}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ahom}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Ahom}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ahom}"
);
testPropertyEscapes(
  /^\p{scx=Ahom}+$/u,
  matchSymbols,
  "\\p{scx=Ahom}"
);
testPropertyEscapes(
  /^\p{scx=Ahom}+$/u,
  matchSymbols,
  "\\p{scx=Ahom}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x0116FF],
    [0x01171B, 0x01171C],
    [0x01172C, 0x01172F],
    [0x011747, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Ahom}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ahom}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Ahom}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ahom}"
);
testPropertyEscapes(
  /^\P{scx=Ahom}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ahom}"
);
testPropertyEscapes(
  /^\P{scx=Ahom}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ahom}"
);
