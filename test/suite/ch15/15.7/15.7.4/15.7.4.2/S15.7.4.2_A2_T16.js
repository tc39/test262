// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * toString: If radix is an integer from 2 to 36, but not 10,
 * the result is a string, the choice of which is implementation-dependent
 *
 * @path ch15/15.7/15.7.4/15.7.4.2/S15.7.4.2_A2_T16.js
 * @description radix is 18
 */

//CHECK#1
try {
  Number.prototype.toString(18);
  $FAIL('#1: "Number.prototype.toString(18);" lead to throwing exception. Actual: '+Number.prototype.toString(18));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: "Number.prototype.toString(18)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#2
if((new Number()).toString(18) !== "0"){
  $ERROR('#2: (new Number()).toString(18) === "0"');
}

//CHECK#3
if((new Number(0)).toString(18) !== "0"){
  $ERROR('#3: (new Number(0)).toString(18) === "0"');
}

//CHECK#4
if((new Number(-1)).toString(18) !== "-1"){
  $ERROR('#4: (new Number(-1)).toString(18) === "-1"');
}

//CHECK#5
if((new Number(1)).toString(18) !== "1"){
  $ERROR('#5: (new Number(1)).toString(18) === "1"');
}

//CHECK#6
if((new Number(Number.NaN)).toString(18) !== "NaN"){
  $ERROR('#6: (new Number(Number.NaN)).toString(18) === "NaN"');
}

//CHECK#7
if((new Number(Number.POSITIVE_INFINITY)).toString(18) !== "Infinity"){
  $ERROR('#7: (new Number(Number.POSITIVE_INFINITY)).toString(18) === "Infinity"');
}

//CHECK#8
if((new Number(Number.NEGATIVE_INFINITY)).toString(18) !== "-Infinity"){
  $ERROR('#8: (new Number(Number.NEGATIVE_INFINITY)).toString(18) === "-Infinity"');
}

