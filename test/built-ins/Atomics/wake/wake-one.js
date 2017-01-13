// Copyright (C) 2015 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test that Atomics.wake wakes one waiter if that's what the count is.
---*/

$.agent.start(
`
$.agent.receiveBroadcast(function (sab) {
  var ia = new Int32Array(sab);
  $.agent.report(Atomics.wait(ia, 0, 0, 1000)); // We may timeout eventually
  $.agent.leaving();
})
`);

$.agent.start(
`
$.agent.receiveBroadcast(function (sab) {
  var ia = new Int32Array(sab);
  $.agent.report(Atomics.wait(ia, 0, 0, 1000)); // We may timeout eventually
  $.agent.leaving();
})
`);

var ia = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$.agent.broadcast(ia.buffer);
$.agent.sleep(500);                             // Give the agents a chance to wait
assert.sameValue(Atomics.wake(ia, 0, 1), 1);    // Wake one
var rs = [getReport(), getReport()];
rs.sort();
assert.sameValue(rs[0], "ok");
assert.sameValue(rs[1], "timed-out");

function getReport() {
    var r;
    while ((r = $.agent.getReport()) == null)
        $.agent.sleep(100);
    return r;
}
