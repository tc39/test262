// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Testing $262.agent.* extensions
info: |
    Including atomicsHelper.js will expose the functions:

      - $262.agent.getReportAsync
      - $262.agent.getReport
      - $262.agent.safeBroadcastAsync
      - $262.agent.safeBroadcast
      - $262.agent.setTimeout
      - $262.agent.tryYield (wrapper for $262.agent.sleep)
      - $262.agent.trySleep (wrapper for $262.agent.sleep)

    $262.agent.* relies on the presence of host defined agent capabilities

includes: [atomicsHelper.js]
features: [Atomics, SharedArrayBuffer]
---*/

const AGENT_READY_INDEX = 0;
const AGENT_WAIT_INDEX = 1;

$262.agent.start(`
  $262.agent.receiveBroadcast((sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${AGENT_READY_INDEX}, 1);
    $262.agent.report(Atomics.wait(i32a, ${AGENT_WAIT_INDEX}, 0, Infinity));
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(
  new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

$262.agent.safeBroadcast(i32a);
$262.agent.waitUntil(i32a, AGENT_READY_INDEX, 1);

// An agent may have been interrupted between reporting its initial report
// and the `Atomics.wait` call. Try to yield control to ensure the agent
// actually started to wait.
$262.agent.tryYield();

assert.sameValue(
  Atomics.notify(i32a, AGENT_WAIT_INDEX),
  1,
  'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)), AGENT_WAIT_INDEX) must return 1'
);

assert.sameValue($262.agent.getReport(), 'ok', '$262.agent.getReport() must return "ok"');
