// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "public" token can not be used as identifier in strict code
 *
 * @path 07_Lexical_Conventions/7.5_Tokens/7.5.3_Future_Reserved_Words/S7.5.3_A1.24.js
 * @description Checking if execution of "public=1" fails in strict code
 * @strictOnly
 * @negative
 */


var public = 1;

