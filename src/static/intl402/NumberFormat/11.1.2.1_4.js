// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.2.1_4
description: >
    Tests that non-object values passed as this to NumberFormat are ignored
    and a normal number format object will be initialized and returned.
author: Norbert Lindenberg
---*/

var thisValues = [true, 42, "国際化"];

thisValues.forEach(function (value) {
    var format = Intl.NumberFormat.call(value);
    // check that the returned object functions as a number format
    var referenceFormat = new Intl.NumberFormat();
    if (Intl.NumberFormat.prototype.format.call(format, 12.3456) !== referenceFormat.format(12.3456)) {
        $ERROR("NumberFormat initialized from " + value + " doesn't behave like normal number format.");
    }
    return true;
});
