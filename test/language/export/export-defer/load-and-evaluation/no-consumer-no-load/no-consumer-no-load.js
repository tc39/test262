// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-moduledeclarationlinking
description: >
  `export defer { x } from "./dep.js"` does not load dep.js when no consumer
  imports x. The deferred binding's name is absent from any caller's
  importedNames, so the source module's linking is skipped.
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

  An optional indirect (deferred) re-export is only linked when the
  re-exported binding's name is present in the consumer's imported names.
  GetNewOptionalIndirectExportsModuleRequests filters the deferred
  re-exports by _request_.[[ImportedNames]]; deferred re-exports whose
  names are not requested are skipped, and their source modules never
  enter the linking list.

  If dep-syntax-error_FIXTURE.js were loaded, a resolution-phase
  SyntaxError would be thrown. The test runs to completion, proving it
  was not loaded. Barrel's `marker` export is asserted to confirm the
  barrel itself did load, ruling out the degenerate "nothing ran" case.
flags: [module]
features: [export-defer]
---*/

import { marker } from "./barrel_FIXTURE.js";

assert.sameValue(marker, 'loaded');
