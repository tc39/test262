// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @description Tests that the Intl.Collator constructor has a length
 * property that equals 2.
 */

if (!Intl.Collator.hasOwnProperty('length')) {
    $ERROR('Intl.Collator has no length property');
}

if (Intl.Collator.length != 2) {
    $ERROR('Intl.Collator.length is not 2.');
}

