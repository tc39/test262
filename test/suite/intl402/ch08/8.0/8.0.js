// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch08/8.0/8.0.js
 * @description Tests properties of Intl object.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  // We keep Intl extensible and not frozen.
  if (Object.isFrozen(Intl) === true) {
    $ERROR('isFrozen(Intl) returns true.')
  }

  if (Object.isExtensible(Intl) === false) {
    $ERROR('isExtensible(Intl) returns false.')
  }

  var falsey = undefined;

  // Intl can't be constructed.
  try {
    falsey = new Intl();
  } catch (e) {
  }

  if (!!falsey) {
    $ERROR('Intl object should not be constructable.')
  }

  // Intl can't be called as a function.
  try {
    falsey = Intl();
  } catch (e) {
  }

  if (!!falsey) {
    $ERROR('Intl should not be callable.')
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);