// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * +Infinity and Infinity are the same as Number.POSITIVE_INFINITY
 *
 * @section: 8.5, 7.8.3;
 * @path: 08_Types/8.5_The_Number_Type/S8.5_A12.1.js;
 * @description: Compare Infinity and +Infinity with Number.POSITIVE_INFINITY;
 */

var p_inf=+Infinity;
var inf=Infinity;

//CHECK #1 
if (p_inf!==Number.POSITIVE_INFINITY){
  $ERROR('#1: +Infinity is the same as Number.POSITIVE_INFINITY');
}

//CHECK #2 
if (inf!==Number.POSITIVE_INFINITY){
  $ERROR('#2: Infinity is the same as Number.POSITIVE_INFINITY');
}

