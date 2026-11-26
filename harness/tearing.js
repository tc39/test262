// Copyright (C) 2025 André Bargull.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Helper function for no-tear tests.
defines:
  - testNoTear
---*/

/**
 * @param TypedArray An integer TypedArray
 * @param length Number of elements
 * @param test Function to modify the array
 * @param setup Optional setup function
 */
function testNoTear(
  TypedArray,
  length,
  test,
  setup = undefined,
) {
  assert.sameValue(typeof TypedArray, "function");
  assert.sameValue(typeof length, "number");
  assert.sameValue(typeof test, "function");
  if (setup !== undefined) {
    assert.sameValue(typeof setup, "function");
  }

  assert(
    TypedArray.BYTES_PER_ELEMENT === 2 ||
    TypedArray.BYTES_PER_ELEMENT === 4
  );

  // Number of loop iterations in no-tear tests.
  //
  // Larger numbers increase the likelihood that teared writes can be observed
  // in non-conformant implementations, but also increase the test duration for
  // conformant implementations.
  const LOOP_COUNT = 10000;

  // Length of the synchronization Int32 TypedArray.
  const SYNC_LENGTH = 2;

  // Accounting of live agents.
  const RUNNING_INDEX = 0;

  // Index all agents are waiting on.
  const WAIT_INDEX = 1;

  // Number of agents to perform concurrent writes.
  const NUM_AGENTS = 2;

  // Constructor to create the TypedArray object which will be tested.
  const TYPED_ARRAY = TypedArray;

  // Length of the TypedArray object.
  const LENGTH = length;

  // Start offset of the TypedArray object within the SharedArrayBuffer. The
  // offset shouldn't be word-aligned to make it more likely that non-conformant
  // implementations perform tearing, so we add `TYPED_ARRAY.BYTES_PER_ELEMENT`.
  const OFFSET = SYNC_LENGTH * Int32Array.BYTES_PER_ELEMENT +
                 TYPED_ARRAY.BYTES_PER_ELEMENT;

  // Total byte length of the SharedArrayBuffer. 
  const SAB_BYTE_LENGTH = OFFSET + LENGTH * TYPED_ARRAY.BYTES_PER_ELEMENT;

  // Byte pattern which will be written into the TypedArray.
  const BYTE_PATTERN = TypedArray.BYTES_PER_ELEMENT === 2 ? 0x1111 : 0x1111_1111;

  // SharedArrayBuffer passed to agents.
  const sab = new SharedArrayBuffer(SAB_BYTE_LENGTH);

  // Int32 TypedArray used for cross-agent synchronization.
  const sync = new Int32Array(sab, 0, SYNC_LENGTH);

  // TypedArray used for testing.
  const ta = new TYPED_ARRAY(sab, OFFSET, LENGTH);

  // Call the optional setup function, if present.
  if (setup !== undefined) {
    setup(ta);
  }

  // Create a new agent.
  function createAgent(value) {
    // Template function for the agent.
    function agent(sab) {
      let sync = new Int32Array(sab, 0, SYNC_LENGTH);

      // Notify agent has started.
      Atomics.add(sync, RUNNING_INDEX, 1);

      // Wait until all agents have started.
      Atomics.wait(sync, WAIT_INDEX, 0);

      // Repeatedly write into the buffer. Uses Atomics.store to ensure JIT
      // compilers won't move the store before the loop.
      let ta = new TYPED_ARRAY(sab, OFFSET, LENGTH);
      for (let i = 0; i < LOOP_COUNT; ++i) {
        for (let j = 0; j < LENGTH; ++j) {
          Atomics.store(ta, j, VALUE);
        }
      }

      $262.agent.leaving();
    }

    // Replace all constants in the template.
    let source = agent.toString()
                      .replaceAll("SYNC_LENGTH", SYNC_LENGTH)
                      .replaceAll("RUNNING_INDEX", RUNNING_INDEX)
                      .replaceAll("WAIT_INDEX", WAIT_INDEX)
                      .replaceAll("LOOP_COUNT", LOOP_COUNT)
                      .replaceAll("TYPED_ARRAY", TYPED_ARRAY.name)
                      .replaceAll("OFFSET", OFFSET)
                      .replaceAll("LENGTH", LENGTH)
                      .replaceAll("VALUE", value);

    // Return the agent script source.
    return `$262.agent.receiveBroadcast(${source});`;
  }

  // Create agents.
  for (let i = 0; i < NUM_AGENTS; ++i) {
    let value = BYTE_PATTERN * (i + 1);
    $262.agent.start(createAgent(value));
  }

  // Broadcast the buffer to all agents.
  $262.agent.safeBroadcast(sync);

  // Wait until agents are ready.
  $262.agent.waitUntil(sync, RUNNING_INDEX, NUM_AGENTS);

  // Wake up agents.
  let woken = 0;
  while ((woken += Atomics.notify(sync, WAIT_INDEX)) < NUM_AGENTS);

  // Loop to increase the likelihood of concurrent writes.
  for (let i = 0; i < LOOP_COUNT; ++i) {
    let r = test(ta);

    // Ensure no copied elements were teared.
    for (let j = 0; j < LENGTH; ++j) {
      let v = r[j];
      assert(
        v % BYTE_PATTERN === 0,
        `i=${i}: r[${j}] = ${v.toString(16)}`
      );
    }
  }
}
