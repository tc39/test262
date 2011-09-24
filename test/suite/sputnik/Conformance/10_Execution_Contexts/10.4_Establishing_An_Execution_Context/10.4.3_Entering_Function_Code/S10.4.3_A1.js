// Copyright 2011 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description When calling a strict anonymous function as a
 * function, "this" should be bound to undefined.
 * @onlyStrict
 */

var that = (function() { return this; })();
if (that !== undefined) {
  $ERROR('#1: "this" leaked as: ' + that);
}
