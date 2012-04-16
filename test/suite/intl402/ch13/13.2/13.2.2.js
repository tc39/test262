// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch13/13.2/13.2.2.js
 * @description Tests that the Intl.DateTimeFormat has a supportedLocalesOf
 * property, and it works as planned.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  var supported = (new Intl.LocaleList())[0];
  var notSupported = 'zxx';
  var requestedLocales = [supported, notSupported];
    
  var supportedLocales;

  if (!Intl.DateTimeFormat.hasOwnProperty('supportedLocalesOf')) {
    $ERROR("Intl.DateTimeFormat doesn't have a supportedLocalesOf property.");
  }
    
  supportedLocales = Intl.DateTimeFormat.supportedLocalesOf(requestedLocales);
  if (supportedLocales.length !== 1) {
    $ERROR('The length of supported locales list is not 1.');
  }
    
  if (supportedLocales[0] !== supported) {
    $ERROR('The supported locale is not returned in the supported list.');
  }
    
  return true;
}
runTestCase(testcase);
