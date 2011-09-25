// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Function.prototype.bind must exist
 */

if (!('bind' in Function.prototype)) {
  $ERROR('Function.prototype.bind is missing');
}
