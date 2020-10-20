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
flags: [async]
---*/

Promise.all([
    new Promise(resolve => $262.agent.setTimeout(() => resolve(2), 2)),
    new Promise(resolve => $262.agent.setTimeout(() => resolve(4), 4)),
    new Promise(resolve => $262.agent.setTimeout(() => resolve(6), 6)),
  ]).then(results => {
    assert.sameValue(results[0], 2);
    assert.sameValue(results[1], 4);
    assert.sameValue(results[2], 6);
  }, $DONE).then($DONE, $DONE);
