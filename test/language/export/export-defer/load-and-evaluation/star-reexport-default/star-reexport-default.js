// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-moduledeclarationlinking
description: >
  `export * from` over a module with a deferred default re-export does NOT
  pull the deferred source. `export *` is ALL-BUT-DEFAULT, so the deferred
  default is filtered out of the consumer's optional indirect requests and
  its source module is never linked.
info: |
  1. Link ( [ _importedNames_ ] )
    1. ...
    1. If _importedNames_ is not present, let _importedNames_ be ~all~.
    1. ...
    1. Let _result_ be Completion(InnerModuleLinking(_module_, _stack_, 0)).
    1. ...
    1. Let _optionalIndirectRequests_ be _module_.GetOptionalIndirectExportsModuleRequests(_importedNames_).
    1. For each ModuleRequest Record _request_ of _optionalIndirectRequests_, do
        1. Let _requiredModule_ be GetImportedModule(_module_, _request_).
        1. ...
        1. If _requiredModule_.[[Status]] is ~unlinked~, perform ? _requiredModule_.Link(_request_.[[ImportedNames]]).

  1. InnerModuleLinking ( _module_, _stack_, _index_ )
    1. ...
    1. Let _linkingList_ be « ».
    1. Perform BuildLinkingList(_linkingList_, _module_, _module_.[[RequestedModules]], « »).
    1. For each Module Record _requiredModule_ of _linkingList_, do
        1. Set _index_ to ? InnerModuleLinking(_requiredModule_, _stack_, _index_).
        1. ...

  1. BuildLinkingList ( _linkingList_, _referrer_, _moduleRequests_, _previouslyImportedNames_ )
    1. For each ModuleRequest Record _request_ of _moduleRequests_, do
        1. Let _requiredModule_ be GetImportedModule(_referrer_, _request_).
        1. If _linkingList_ does not contain _requiredModule_, then
            1. Append _requiredModule_ to _linkingList_.
            1. ...
        1. If _requiredModule_ is a Cyclic Module Record, then
            1. Let _optionalIndirectRequests_ be GetNewOptionalIndirectExportsModuleRequests(_requiredModule_, _request_.[[ImportedNames]], _previouslyImportedNames_).
            1. Perform BuildLinkingList(_linkingList_, _requiredModule_, _optionalIndirectRequests_, _previouslyImportedNames_).

  `export * from barrel` produces a request for barrel with
  [[ImportedNames]] = ~all-but-default~. When BuildLinkingList recurses
  through consumer into barrel, GetNewOptionalIndirectExportsModuleRequests
  filters barrel's deferred re-exports by this name set. Barrel's only
  deferred re-export (`export defer { foo as default } from ...`) is named
  `default`, which ~all-but-default~ excludes — so the deferred source is
  dropped from the linking list.

  The dep has a SyntaxError. If it were loaded, a resolution-phase
  SyntaxError would be thrown. The test runs to completion; asserting
  that `marker` surfaces through consumer's `export *` and that both
  barrel and consumer ran proves the star re-export mechanism executed
  and correctly filtered out the deferred default.
flags: [module]
features: [export-defer]
includes: [compareArray.js]
---*/

import "../setup_FIXTURE.js";
import { marker } from "./consumer_FIXTURE.js";

assert.sameValue(marker, 'barrel-loaded');
assert.compareArray(globalThis.evaluations, ['barrel', 'consumer']);
