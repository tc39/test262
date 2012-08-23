// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests the internal properties of Intl.NumberFormat.
 * @author: Roozbeh Pournader
 */

var defaultLocale = new Intl.NumberFormat([]).resolvedOptions().locale;
var supportedLocales = Intl.NumberFormat.supportedLocalesOf([defaultLocale]);
  
if (supportedLocales.length < 1 || supportedLocales[0] !== defaultLocale) {
    $ERROR('The default locale is not supported by Intl.NumberFormat');
}

// FIXME: Find a way to check that [[relevantExtensionKeys]] === ['nu']
  
// FIXME: Find a way to check specified properties of [[localeData]]  

