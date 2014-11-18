
function isConfigurable(obj, name) {
    try {
        delete obj[name];
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }
    }
    return !Object.prototype.hasOwnProperty.call(obj, name);
}

function isEnumerable(obj, name) {
    for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop) && 
            sameValue(prop, name)) {
            return true;
        }
    }

    return false;
}

function sameValue(x, y) {
  if ((typeof x === "number") && (typeof y === "number")) {
     // special case NaN and ±0
     if (isNaN(x) && isNaN(y)) {
       return true;
     } else if ((x === 0) && (y === 0)) {
       return (1 / x) === (1 / y);
     }
  }

  return x === y;
}

function isEqualTo(obj, name, expectedValue) {
    var actualValue = obj[name];

    return sameValue(actualValue, expectedValue);
}

function isWritable(obj, name, verifyProp, value) {
    var newValue = value || "unlikelyValue";

    try {
        obj[name] = newValue;
    } catch (e) {
        if (!(e instanceof TypeError)) {
            $ERROR("Expected TypeError, got " + e);
        }
    }

    if ((verifyProp && isEqualTo(obj, verifyProp, newValue)) ||
        isEqualTo(obj, name, newValue)) {
        return true;
    }

    return false;
}

function verifyEqualTo(obj, name, value) {
    if (!isEqualTo(obj, name, value)) {
        $ERROR("Expected obj[" + String(name) + "] to equal " + value +
                   ", actually " + obj[name]);
    }
}

function verifyWritable(obj, name, verifyProp, value) {
    if (!isWritable(obj, name, verifyProp, value)) {
        $ERROR("Expected obj[" + String(name) + "] to be writable, but was not.");
    }
}

function verifyNotWritable(obj, name, verifyProp, value) {
    if (isWritable(obj, name, verifyProp)) {
        $ERROR("Expected obj[" + String(name) + "] NOT to be writable, but was.");
    }
}

function verifyEnumerable(obj, name) {
    if (!isEnumerable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] to be enumerable, but was not.");
    }
}

function verifyNotEnumerable(obj, name) {
    if (isEnumerable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] NOT to be enumerable, but was.");
    }
}

function verifyConfigurable(obj, name) {
    if (!isConfigurable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] to be configurable, but was not.");
    }
}

function verifyNotConfigurable(obj, name) {
    if (isConfigurable(obj, name)) {
        $ERROR("Expected obj[" + String(name) + "] NOT to be configurable, but was.");
    }
}

