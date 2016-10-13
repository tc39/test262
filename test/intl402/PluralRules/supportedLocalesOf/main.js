// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
---*/

var defaultLocale = new Intl.PluralRules().resolvedOptions().locale;
var notSupported = 'zxx'; // "no linguistic content"
var requestedLocales = [defaultLocale, notSupported];
    
var supportedLocales;

if (!Intl.PluralRules.hasOwnProperty('supportedLocalesOf')) {
    $ERROR("Intl.PluralRules doesn't have a supportedLocalesOf property.");
}
    
supportedLocales = Intl.PluralRules.supportedLocalesOf(requestedLocales);
if (supportedLocales.length !== 1) {
    $ERROR('The length of supported locales list is not 1.');
}
    
if (supportedLocales[0] !== defaultLocale) {
    $ERROR('The default locale is not returned in the supported list.');
}
