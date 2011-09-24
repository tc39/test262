// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.5_Function.prototype.bind/S15.3.4.5_A4.js
 * @description Function.prototype.bind call the original's internal
 * [[Call]] method rather than its .apply method.
 */

function foo() {}

var b = foo.bind(33, 44);
foo.apply = function() {
  $ERROR("Function.prototype.bind called original's .apply method");
};
b(55, 66);

