/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  array.sort compare-function gets incorrect this
esid: pending
---*/

[1, 2, 3].sort(function() { "use strict"; assert.sameValue(this, undefined); });
