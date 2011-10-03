// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * NaN is not a keyword
 *
 * @path 08_Types/8.5_The_Number_Type/S8.5_A4.js
 * @description Create variable entitled NaN
 */

var NaN=1.0;
NaN='asdf';
NaN=true;
NaN=Number.NaN;

