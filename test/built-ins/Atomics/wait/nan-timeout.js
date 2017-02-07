// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test that Atomics.wait does not time out with a NaN timeout
---*/

$.agent.start(
`
$.agent.receiveBroadcast(function (sab, id) {
  var ia = new Int32Array(sab);
  $.agent.report(Atomics.wait(ia, 0, 0, NaN));  // NaN => Infinity
  $.agent.leaving();
})
`);

var ia = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$.agent.broadcast(ia.buffer);
$.agent.sleep(500);                // Ample time
assert.sameValue($.agent.getReport(), null);
Atomics.wake(ia, 0);
assert.sameValue(getReport(), "ok");

function getReport() {
    var r;
    while ((r = $.agent.getReport()) == null)
        $.agent.sleep(100);
    return r;
}
