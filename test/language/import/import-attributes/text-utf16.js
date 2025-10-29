// Copyright (C) 2025 Mozilla Foundation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-create-text-module
description: All text imports are parsed as UTF-8
flags: [module]
features: [import-attributes, import-text]
---*/

import value from './text-utf16_FIXTURE' with { type: 'text' };

assert.sameValue(
  value,
  'a\x00n\x00 \x00U\x00T\x00F\x00-\x001\x006\x00 \x00v\x00a\x00l\x00u\x00e\x00\n\x00'
);
