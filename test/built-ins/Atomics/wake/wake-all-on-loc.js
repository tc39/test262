// Copyright (C) 2015 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test that Atomics.wake wakes all waiters on a location, but does not
  wake waiters on other locations.
---*/

for ( var i=0 ; i < 3 ; i++ ) {
$.agent.start(
`
$.agent.receiveBroadcast(function (sab) {
  var ia = new Int32Array(sab);
  $.agent.report("A " + Atomics.wait(ia, 0, 0));
  $.agent.leaving();
})
`);
}

$.agent.start(
`
$.agent.receiveBroadcast(function (sab) {
  var ia = new Int32Array(sab);
  $.agent.report("B " + Atomics.wait(ia, 1, 0, 1000)); // We will timeout eventually
  $.agent.leaving();
})
`);

var ia = new Int32Array(new SharedArrayBuffer(2*Int32Array.BYTES_PER_ELEMENT));

$.agent.broadcast(ia.buffer);
$.agent.sleep(500);                              // Give the agents a chance to wait
assert.sameValue(Atomics.wake(ia, 0), 3);        // Wake all on location 0
var rs = [getReport(), getReport(), getReport(), getReport()];
// Do not sort the array -- B should timeout much after the others are woken
assert.sameValue(rs[0], "A ok");
assert.sameValue(rs[1], "A ok");
assert.sameValue(rs[2], "A ok");
assert.sameValue(rs[3], "B timed-out");

function getReport() {
    var r;
    while ((r = $.agent.getReport()) == null)
        $.agent.sleep(100);
    return r;
}
