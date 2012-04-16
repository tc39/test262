// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch13/13.2/13.2.1.js
 * @description Tests that the Intl.DateTimeFormat prototype object exists and
 * is not writable, enumerable, or configurable.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  var desc;

  if (!Intl.DateTimeFormat.hasOwnProperty('prototype')) {
    $ERROR('Intl.DateTimeFormat has no prototype property');
  }

  desc = Object.getOwnPropertyDescriptor(Intl.DateTimeFormat, 'prototype');
  if (desc.writable === true) {
    $ERROR('Intl.DateTimeFormat.prototype is writable.');
  }
  if (desc.enumerable === true) {
    $ERROR('Intl.DateTimeFormat.prototype is enumerable.');
  }
  if (desc.configurable === true) {
    $ERROR('Intl.DateTimeFormat.prototype is configurable.');
  }

  return true;
}
runTestCase(testcase);
