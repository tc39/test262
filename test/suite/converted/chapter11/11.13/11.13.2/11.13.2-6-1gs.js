

/**
 * @path chapter11/11.13/11.13.2/11.13.2-6-1gs.js
 * @description Strict Mode - SyntaxError is throw if the identifier eval appears as the LeftHandSideExpression of a Compound Assignment operator(*=)
 * @strictOnly
 * @negative EarlyErrorRePat
 */


throw NotEarlyError;
eval *= 20;
