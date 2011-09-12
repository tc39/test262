// Copyright 2011 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Call replaceValue passing undefined as the this value
 *
 * @section 15.5.4.11
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A12.js
 * @description replaceValue tests that its this value is undefined
 */

var global = this;
'x'.replace(/x/, function() {
  "use strict";

  if (this === global) {
    $FAIL('#1: String replace leaks global');
  }
  if (this !== undefined) {
    $FAIL('#2: replaceValue should be called with this===undefined. ' +
          'Actual: ' + this);
  }
  return 'y';
});

