// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests the internal properties of Intl.Collator.
 */

var defaultLocale = new Intl.Collator([]).resolvedOptions().locale;
var supportedLocales = Intl.Collator.supportedLocalesOf([defaultLocale]);

if (supportedLocales.length < 1 || supportedLocales[0] !== defaultLocale) {
    $ERROR('The default locale is not supported by Intl.Collator');
}

// FIXME: Find a way to check [[relevantExtensionKeys]]

// FIXME: Find a way to check specified properties of [[localeData]]

