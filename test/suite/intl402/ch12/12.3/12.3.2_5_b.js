// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch12/12.3/12.3.2_5_b.js
 * @description Tests that Intl.NumberFormat.prototype.format
 * formats percent values properly.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  var numberFormatter = new Intl.NumberFormat();
  var percentFormatter = new Intl.NumberFormat(undefined, {style: 'percent'});

  var formattedTwenty = numberFormatter.format(20);
  var formattedTwentyPercent = percentFormatter.format(0.20);

  // FIXME: May not work for some theoretical locales where percents and
  // normal numbers are formatted using different numbering systems.
  if (formattedTwentyPercent.indexOf(formattedTwenty) === -1) {
    $ERROR("Intl.NumberFormat's formatting of 20% does not include a " +
        "formatting of 20 as a substring.");
  }

  // FIXME: Move this to somewhere appropriate
  if (percentFormatter.format(0.011) === percentFormatter.format(0.02)) {
    $ERROR('Intl.NumberFormat is formatting 1.1% and 2% the same way.');
  }

  return true;
}
runTestCase(testcase);
