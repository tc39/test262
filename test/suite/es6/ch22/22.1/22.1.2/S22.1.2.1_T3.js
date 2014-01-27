/**
 * @description Testing Array.from when passed an undefined
 * @author Hank Yates (hankyates@gmail.com)
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
 */

runTestCase(function () {
  try {
    Array.from(undefined);
  } catch (e) {
    return e instanceof TypeError;
  }

  return false;

});

