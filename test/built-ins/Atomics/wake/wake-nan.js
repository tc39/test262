// Copyright (C) 2015 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test that Atomics.wake wakes zero waiters if the count is NaN
---*/

$.agent.start(
`
$.agent.receiveBroadcast(function (sab) {
  var ia = new Int32Array(sab);
  $.agent.report(Atomics.wait(ia, 0, 0, 1000)); // We will timeout eventually
  $.agent.leaving();
})
`);

var ia = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$.agent.broadcast(ia.buffer);
$.agent.sleep(500);                             // Give the agent a chance to wait
assert.sameValue(Atomics.wake(ia, 0, NaN), 0);  // Don't actually wake it
assert.sameValue(getReport(), "timed-out");

function getReport() {
    var r;
    while ((r = $.agent.getReport()) == null)
        $.agent.sleep(100);
    return r;
}
