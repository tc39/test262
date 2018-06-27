// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Collection of functions used to interact with Atomics.* operations across agent boundaries.
---*/

/**
 * The amount of slack allowed for testing time-related Atomics methods (i.e. wait and wake).
 * The absolute value of the difference of the observed time and the expected time must
 * be epsilon-close.
 */
$262.agent.MAX_TIME_EPSILON = 100;

/**
 * @return {String} A report sent from an agent.
 */
{
  // This is only necessary because the original
  // $262.agent.getReport API was insufficient.
  //
  // All runtimes currently have their own
  // $262.agent.getReport which is wrong, so we
  // will pave over it with a corrected version.
  //
  // Binding $262.agent is necessary to prevent
  // breaking SpiderMonkey's $262.agent.getReport
  let getReport = $262.agent.getReport.bind($262.agent);

  $262.agent.getReport = function() {
    var r;
    while ((r = getReport()) == null) {
      $262.agent.sleep(1);
    }
    return r;
  };
}
/**
 * With a given Int32Array, wait until the expected number of agents have reported themselves by
 * calling:
 *
 *    Atomics.add(i32a, index, 1);
 *
 * @param {Int32Array} i32a An Int32Array with a SharedArrayBuffer
 * @param {Number} index    The index of which all agents will report.
 * @param {Number} expected The number of agents that are expected to report as active.
 */
$262.agent.waitUntil = function(i32a, index, expected) {
  let agents = 0;
  while ((agents = Atomics.load(i32a, index)) !== expected) {
    /* nothing */
  }
  assert.sameValue(agents, expected, `Reporting number of 'agents' equals the value of 'expected' (${expected})`);
};
