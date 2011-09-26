

/**
 * @path chapter11/11.3/11.3.1/11.3.1-2-1gs.js
 * @description Strict Mode - SyntaxError is throw if the identifier arguments appear as a PostfixExpression(arguments++)
 * @onlyStrict
 * @negative ^((?!NotEarlyError).)*$
 */

"use strict";
throw NotEarlyError;
arguments++;
