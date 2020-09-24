// Copyright (C) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: |
    Collection of Iterator helper classes.
defines: [Test262AsyncIterator, Test262Iterator]
---*/

class Test262Iterator extends Iterator {
  constructor(iterable = []) {
    super();
    this.iterable = Array.from(iterable);
    this.nextCalls = 0;
  }
  next() {
    let done = this.iterable.length === 0;
    let value = done ? undefined : this.iterable.shift();
    this.nextCalls++;
    return {
      done,
      value
    };
  }
}

class Test262AsyncIterator extends AsyncIterator {
  constructor(iterable = []) {
    super();
    this.iterable = Array.from(iterable);
    this.nextCalls = 0;
  }
  async next() {
    let done = this.iterable.length === 0;
    let value = done ? undefined : this.iterable.shift();
    this.nextCalls++;
    return {
      done,
      value
    };
  }
}
