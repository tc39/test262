// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Intl-Locale-shell.js
- non262-Intl-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Intl
description: |
  pending
esid: pending
---*/
// ApplyOptionsToTag canonicalises the locale identifier before applying the
// options. That means "und-Armn-SU" is first canonicalised to "und-Armn-AM",
// then the language is changed to "ru". If "ru" were applied first, the result
// would be "ru-Armn-RU" instead.
assert.sameValue(new Intl.Locale("und-Armn-SU", {language:"ru"}).toString(),
         "ru-Armn-AM");

