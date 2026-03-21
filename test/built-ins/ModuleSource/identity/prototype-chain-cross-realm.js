// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-source-objects
description: >
  A ModuleSource created in another realm has that realm's prototype chain,
  not the current realm's. instanceof checks reflect this difference.
info: |
  Each realm has its own %ModuleSource.prototype% and
  %AbstractModuleSource.prototype% intrinsics. A ModuleSource object created
  in realm A has realm A's %ModuleSource.prototype% as its [[Prototype]].
  When accessed from realm B, the object's prototype chain still belongs to
  realm A.

  This is the standard cross-realm prototype behavior for all built-in
  objects in ECMAScript. The instanceof operator checks the prototype chain
  against the constructor's .prototype from the realm where instanceof is
  evaluated, so a cross-realm ModuleSource is not an instanceof the current
  realm's ModuleSource or AbstractModuleSource constructors.
features: [source-phase-imports, esm-phase-imports, cross-realm]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');
assert.sameValue(typeof $262.AbstractModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var otherRealm = $262.createRealm();
var other$262 = otherRealm.global.$262;

// Create a ModuleSource in the other realm.
var crossRealmSrc = other$262.createModuleSource('export var x = 1;', baseId + 'cross-realm-proto');

// Create a ModuleSource in the current realm for comparison.
var localSrc = $262.createModuleSource('export var x = 2;', baseId + 'local-proto');

// The cross-realm source's prototype chain belongs to the other realm.
var crossProto = Object.getPrototypeOf(crossRealmSrc);
var localProto = Object.getPrototypeOf(localSrc);

// Each realm has distinct %ModuleSource.prototype% objects.
assert.notSameValue(crossProto, localProto,
  'Cross-realm ModuleSource should have a different [[Prototype]] than local ModuleSource');

// The cross-realm source's grandparent is the other realm's %AbstractModuleSource.prototype%.
var crossGrandProto = Object.getPrototypeOf(crossProto);
var localGrandProto = Object.getPrototypeOf(localProto);

assert.notSameValue(crossGrandProto, localGrandProto,
  'Cross-realm AbstractModuleSource.prototype should differ from local AbstractModuleSource.prototype');

// The cross-realm source is an instanceof the other realm's constructors.
assert(crossRealmSrc instanceof other$262.AbstractModuleSource,
  'Cross-realm source should be instanceof other realm AbstractModuleSource');

// The cross-realm source is NOT an instanceof the current realm's constructors
// (standard cross-realm prototype semantics).
assert(!(crossRealmSrc instanceof $262.AbstractModuleSource),
  'Cross-realm source should NOT be instanceof current realm AbstractModuleSource');

// The local source is an instanceof the current realm's constructors.
assert(localSrc instanceof $262.AbstractModuleSource,
  'Local source should be instanceof current realm AbstractModuleSource');

// The local source is NOT an instanceof the other realm's constructors.
assert(!(localSrc instanceof other$262.AbstractModuleSource),
  'Local source should NOT be instanceof other realm AbstractModuleSource');
