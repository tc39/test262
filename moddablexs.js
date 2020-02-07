module.exports = function(test) {
  test.result = {
    stderr: 'Test262: This is a fake error.\n',
    stdout: '',
    error: {
      name: 'Test262',
      message: 'This is a fake error.'
    }
  };

  return test;
};
