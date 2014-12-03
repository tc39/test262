function assert(mustBeTrue, message) {
    if (mustBeTrue === true) {
        return;
    }

    if (message === undefined) {
        message = 'Expected true but got ' + String(truthy);
    }
    $ERROR(message);
}

assert._isSameValue = function (a, b) {
    if (a === b) {
        // Handle +/-0 vs. -/+0
        return a !== 0 || 1 / a === 1 / b;
    }

    // Handle NaN vs. NaN
    return a !== a && b !== b;
};

assert.sameValue = function (actual, expected, message) {
    if (assert._isSameValue(actual, expected)) {
        return;
    }

    if (message === undefined) {
        message = 'Expected SameValue(' + String(actual) + ', ' + String(expected) + ') to be true';
    }
    $ERROR(message);
};

assert.notSameValue = function (actual, unexpected, message) {
    if (!assert._isSameValue(actual, unexpected)) {
        return;
    }

    if (message === undefined) {
        message = 'Expected SameValue(' + String(actual) + ', ' + String(unexpected) + ') to be false';
    }
    $ERROR(message);
};

assert.throws = function (expectedErrorConstructor, func) {
    if (func === undefined) {
        $ERROR('assert.throws requires two arguments: the error constructor and a function to run');
        return;
    }

    try {
        func();
    } catch (thrown) {
        if (typeof thrown !== 'object' || thrown === null) {
            $ERROR('Thrown value was not an object!');
            return;
        }
        if (thrown.constructor !== expectedErrorConstructor) {
            $ERROR('Expected a ' + expectedErrorConstructor.name + ' but got a ' + thrown.constructor.name);
        }
        return;
    }

    $ERROR('Expected a ' + expectedErrorConstructor.name + ' to be thrown but no exception was thrown at all');
};
