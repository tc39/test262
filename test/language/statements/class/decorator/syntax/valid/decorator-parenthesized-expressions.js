// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Any expression can be a decorator inside parentheses
esid: prod-DecoratorParenthesizedExpression
info: |
  DecoratorParenthesizedExpression[Yield, Await] :
    ( Expression[+In, ?Yield, ?Await] )
features: [decorators]
---*/

var calls = [];
function record(label) {
  return function() {
    calls.push(label);
  };
}

var obj = { bar: record('call member'), list: [record('computed member')] };
function foo() {
  return obj;
}

class A {
  @(foo().bar) a() {}
  @(obj.list[0]) b() {}
  @(record('call')) c() {}
  @(0, record('comma')) d() {}
  @(true ? record('conditional') : null) e() {}
}

assert.sameValue(calls.join(), 'call member,computed member,call,comma,conditional');
