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
features: [Atomics, Atomics.waitAsync, SharedArrayBuffer]
flags: [async]
---*/

const AGENT_READY_INDEX = 0;
const AGENT_WAIT_INDEX = 1;

$262.agent.start(`
  $262.agent.receiveBroadcast(async (sab) => {
    const i32a = new Int32Array(sab);
    Atomics.add(i32a, ${AGENT_READY_INDEX}, 1);

    $262.agent.report(await Atomics.waitAsync(i32a, ${AGENT_WAIT_INDEX}, 0, Infinity).value);
    $262.agent.leaving();
  });
`);

const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4));

$262.agent.safeBroadcastAsync(i32a, AGENT_READY_INDEX, 1).then(async agentCount => {

  assert.sameValue(
    Atomics.notify(i32a, AGENT_WAIT_INDEX),
    1,
    'Atomics.notify(new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)), AGENT_WAIT_INDEX) must return 1'
  );

  assert.sameValue(
    await $262.agent.getReportAsync(),
    'ok',
    '(await $262.agent.getReportAsync()) resolves to the value "ok"'
  );
}).then($DONE, $DONE);
