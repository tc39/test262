// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

for(let c of [0, 0, 0, 0, 0]) {
  try { (function() {
      this.c = this;
      this.e = arguments;
      Object.defineProperty(this, "d", {
        get: Math.pow,
        configurable: true
      });
      delete this.e;
      delete this.c;
      Object.defineProperty(this, "d", {
        writable: true
      });
      if (Math.tan( - 1)) {
        Object.defineProperty(this, {});
      }
    } (c));
  } catch(e) {}
}

