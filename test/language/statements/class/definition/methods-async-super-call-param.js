// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  Super calls work in the parameter list of async methods
---*/

class A {
  async method() {
    return 'sup';
  }
}

class B extends A {
  async method(x = super.method()) {
    var y = await super.method();
    assert.sameValue(y, 'sup');
  }
}
var child = new B();
child.method().then($DONE, $DONE);
