

/**
 * @path chapter07/7.8/7.8.5/7.8.5-1gs.js
 * @description Empty literal RegExp should result in a SyntaxError
 * @negative NotEarlyError
 */

throw NotEarlyError;
var re = //;

