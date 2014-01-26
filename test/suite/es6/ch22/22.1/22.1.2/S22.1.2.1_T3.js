/**
 * @description Testing Array.from when passed an undefined
 */

runTestCase(function () {
  try {
    Array.from(undefined);
  } catch (e) {
    return e instanceof TypeError;
  }

  return false;

});

