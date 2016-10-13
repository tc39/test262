// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Zibi Braniecki
---*/

if (Intl.PluralRules.prototype.constructor !== Intl.PluralRules) {
    $ERROR("Intl.PluralRules.prototype.constructor is not the same as " +
          "Intl.PluralRules");
}
