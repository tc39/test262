// Copyright (C) 2017 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Collection of functions used to interact with Atomics.* operations across agent boundaries.
---*/

var helper = helper || {};

/**
 * The amount of slack allowed for testing time-related Atomics methods (i.e. wait and wake).
 * The absolute value of the difference of the observed time and the expected time must
 * be epsilon-close.
 */
var $ATOMICS_MAX_TIME_EPSILON = 100;

/**
 *
 * @return {String} A report sent from an agent.
 */
function getReport() {
  var r;
  while ((r = $262.agent.getReport()) == null) {
    $262.agent.sleep(10);
  }
  return r;
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
function waitUntil(i32a, index, expected) {
  let agents = 0;
  while ((agents = Atomics.load(i32a, index)) !== expected) {
    /* nothing */
  }
  assert.sameValue(agents, expected, `'agents' equals the value of 'expected' (${expected})`);
}


helper.getReport = getReport;
helper.waitUntil = waitUntil;
