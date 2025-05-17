/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
description: |
  Behavior of [].pop on proxies
esid: pending
---*/

var p = new Proxy([0, 1, 2], {});
Array.prototype.pop.call(p);
