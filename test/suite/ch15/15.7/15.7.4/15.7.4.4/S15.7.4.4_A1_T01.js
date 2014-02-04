// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.prototype.valueOf() returns this number value
es5id: 15.7.4.4_A1_T01
description: Call without argument
includes: [$FAIL.js]
---*/

//CHECK#1
try {
  Number.prototype.valueOf();
  $FAIL('#1: "Number.prototype.valueOf();" lead to throwing exception. Actual: '+Number.prototype.valueOf());
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: "Number.prototype.valueOf()" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#2
if((new Number()).valueOf() !== 0){
  $ERROR('#2: (new Number()).valueOf() === 0');
}

//CHECK#3
if((new Number(0)).valueOf() !== 0){
  $ERROR('#3: (new Number(0)).valueOf() === 0');
}

//CHECK#4
if((new Number(-1)).valueOf() !== -1){
  $ERROR('#4: (new Number(-1)).valueOf() === -1');
}

//CHECK#5
if((new Number(1)).valueOf() !== 1){
  $ERROR('#5: (new Number(1)).valueOf() === 1');
}

//CHECK#6
if(!isNaN((new Number(Number.NaN)).valueOf())){
  $ERROR('#6: (new Number(Number.NaN)).valueOf() === NaN');
}

//CHECK#7
if((new Number(Number.POSITIVE_INFINITY)).valueOf() !== Number.POSITIVE_INFINITY){
  $ERROR('#7: (new Number(Number.POSITIVE_INFINITY)).valueOf() === Infinity');
}

//CHECK#8
if((new Number(Number.NEGATIVE_INFINITY)).valueOf() !== Number.NEGATIVE_INFINITY){
  $ERROR('#8: (new Number(Number.NEGATIVE_INFINITY)).valueOf() === -Infinity');
}
