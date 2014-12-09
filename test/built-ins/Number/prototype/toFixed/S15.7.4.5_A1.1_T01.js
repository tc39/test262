// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Step 1: Let f be ToInteger(fractionDigits). (If fractionDigits
    is undefined, this step produces the value 0)
es5id: 15.7.4.5_A1.1_T01
description: calling on Number prototype object
includes: [$FAIL.js]
---*/

//CHECK#1
try {
  Number.prototype.toFixed();
  $FAIL('#1: "Number.prototype.toFixed();" lead to throwing exception. Actual: '+Number.prototype.toFixed());
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: "Number.prototype.toFixed()" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#2
try {
  Number.prototype.toFixed(0);
  $FAIL('#2: "Number.prototype.toFixed(0);" lead to throwing exception. Actual: '+Number.prototype.toFixed(0));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#2.1: "Number.prototype.toFixed(0)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#3
try {
  Number.prototype.toFixed(1);
  $FAIL('#3: "Number.prototype.toFixed(1);" lead to throwing exception. Actual: '+Number.prototype.toFixed(1));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#3.1: "Number.prototype.toFixed(1)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#4
try {
  Number.prototype.toFixed(1.1);
  $FAIL('#4: "Number.prototype.toFixed(1.1);" lead to throwing exception. Actual: '+Number.prototype.toFixed(1.1));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#4.1: "Number.prototype.toFixed(1.1)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#5
try {
  Number.prototype.toFixed(0.9);
  $FAIL('#5: "Number.prototype.toFixed(0.9);" lead to throwing exception. Actual: '+Number.prototype.toFixed(0.9));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#5.1: "Number.prototype.toFixed(0.9)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#6
try {
  Number.prototype.toFixed("1");
  $FAIL('#6: "Number.prototype.toFixed("1");" lead to throwing exception. Actual: '+Number.prototype.toFixed("1"));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#6.1: "Number.prototype.toFixed("1")" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#7
try {
  Number.prototype.toFixed("1.1");
  $FAIL('#7: "Number.prototype.toFixed("1.1");" lead to throwing exception. Actual: '+Number.prototype.toFixed("1.1"));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#7.1: "Number.prototype.toFixed("1.1")" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#8
try {
  Number.prototype.toFixed("0.9");
  $FAIL('#8: "Number.prototype.toFixed("0.9");" lead to throwing exception. Actual: '+Number.prototype.toFixed("0.9"));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#8.1: "Number.prototype.toFixed("0.9")" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#9
try {
  Number.prototype.toFixed(Number.NaN);
  $FAIL('#9: "Number.prototype.toFixed(Number.NaN);" lead to throwing exception. Actual: '+Number.prototype.toFixed(Number.NaN));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#9.1: "Number.prototype.toFixed(Number.NaN)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#10
try {
  Number.prototype.toFixed("some string");
  $FAIL('#10: "Number.prototype.toFixed("some string");" lead to throwing exception. Actual: '+Number.prototype.toFixed("some string"));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#10.1: "Number.prototype.toFixed("some string")" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}

//CHECK#11
try {
  Number.prototype.toFixed(-0.1);
  $FAIL('#11: "Number.prototype.toFixed(-0.1);" lead to throwing exception. Actual: '+Number.prototype.toFixed(-0.1));
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#11.1: "Number.prototype.toFixed(-0.1)" lead to throwing exception. Exception is instance of TypeError. Actual: exception is '+e);
  }
}
