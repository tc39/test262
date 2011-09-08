// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search (regexp)
 *
 * @section: 15.5.4.12;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A1_T3.js;
 * @description: Checking by using eval;
 */

var search = String.prototype.search;

if (typeof toString === "undefined"){
    var toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (search(eval("\"bj\"")) !== 2) {
  $ERROR('#1: search = String.prototype.search; search(eval("\\"bj\\"")) === 2. Actual: '+search(eval("\"bj\"")) );
}
//
//////////////////////////////////////////////////////////////////////////////

