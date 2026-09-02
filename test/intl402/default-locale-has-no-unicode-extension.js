// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-defaultlocale
description: >
  The default locale does not contain a Unicode locale extension sequence
info: |
  DefaultLocale ( )

  The returned String value represents the well-formed and canonicalized
  language tag for the host environment's current locale. It must not contain
  a Unicode locale extension sequence.

  ResolveLocale ( availableLocales, requestedLocales, options,
                  relevantExtensionKeys, localeData )

  ...
  5. If match is undefined, set match to the Record { [[locale]]:
     DefaultLocale(), [[extension]]: empty }.
includes: [testIntl.js]
---*/

testWithIntlConstructors(function (Constructor) {
  var defaultLocale = new Constructor().resolvedOptions().locale;
  assert.sameValue(
    defaultLocale.indexOf("-u-"),
    -1,
    "Default locale \"" + defaultLocale + "\" contains a Unicode locale extension sequence."
  );
});
