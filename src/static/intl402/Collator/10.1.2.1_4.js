// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.1.2.1_4
description: >
    Tests that non-object values passed as this to Collator are ignored
    and a normal collator object will be initialized and returned.
author: Norbert Lindenberg
---*/

var thisValues = [true, 42, "国際化"];

thisValues.forEach(function (value) {
    var collator = Intl.Collator.call(value);
    // check that the returned object functions as a collator
    var referenceCollator = new Intl.Collator();
    if (Intl.Collator.prototype.compare.call(collator, "a", "b") !== referenceCollator.compare("a", "b")) {
        $ERROR("Collator initialized from " + value + " doesn't behave like normal collator.");
    }
    return true;
});
