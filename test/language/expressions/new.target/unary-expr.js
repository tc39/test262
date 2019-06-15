// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-UnaryExpression
description: >
  While increments and decrements are restricted to use with NewTarget,
  other unary operators should not throw SyntaxError.
info: |
  UnaryExpression[Yield, Await]:
    UpdateExpression[?Yield, ?Await]:
      LeftHandSideExpression[?Yield, ?Await]:
        NewExpression[?Yield, ?Await]:
          MemberExpression[Yield, Await]:
            MetaProperty:
              NewTarget
features: [new.target, async-functions]
---*/

function a() {
  delete new.target;
  typeof new.target;
  -new.target;
  !new.target;
}

function b() {
  void (new.target);
  +(new.target);
  ~(new.target);
}

function c() {
  delete void typeof +-~! (new.target);
}

async function d() {
  await new.target;
}
