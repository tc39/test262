/**
 * @path ch13/13.1/13.1-13gs.js
 * @description StrictMode - SyntaxError is thrown if 'arguments' occurs as the Identifier of a FunctionDeclaration
 * @onlyStrict
 * @negative ^((?!NotEarlyError).)*$
 */
﻿"use strict";
throw NotEarlyError;
function arguments() { };