// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.metadata
description: Value shared by all realms
info: |
  Unless otherwise specified, well-known symbols values are shared by all
  realms.
features: [cross-realm, decorator-metadata]
---*/

var OSymbol = $262.createRealm().global.Symbol;

assert.sameValue(Symbol.metadata, OSymbol.metadata);
