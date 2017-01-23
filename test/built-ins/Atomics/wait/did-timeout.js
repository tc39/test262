// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Test that Atomics.wait returns the right result when it timed out and that
  the time to time out is reasonable.
---*/

$.agent.start(
`
$.agent.receiveBroadcast(function (sab, id) {
  var ia = new Int32Array(sab);
  var then = Date.now();
  $.agent.report(Atomics.wait(ia, 0, 0, 500)); // Timeout 500ms
  $.agent.report(Date.now() - then);
  $.agent.leaving();
})
`);

var ia = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT));

$.agent.broadcast(ia.buffer);
assert.sameValue(getReport(), "timed-out");
assert.sameValue(Math.abs((getReport()|0) - 500) < 100, true);

function getReport() {
    var r;
    while ((r = $.agent.getReport()) == null)
	$.agent.sleep(100);
    return r;
}
