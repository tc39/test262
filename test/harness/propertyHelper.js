
function isConfigurable(obj, name) {
    try {
        delete obj[name];
    } catch (e) {
        if (!e instanceof TypeError) {
            $ERROR("Expected TypeError, got " + e);
        }
    }
    return !obj.hasOwnProperty(name);
}

function isEnumerable(obj, name) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && prop === name) {
            return true;
        }
    }

    return false;
}

function isEqualTo(obj, name, expectedValue) {
    var actualValue = obj[name];

    if(actualValue === expectedValue ||
       (typeof actualValue === "number" &&
        typeof expectedValue === "number" &&
        isNaN(actualValue) && isNaN(expectedValue)))
        return true;

    return false;
}

function isWritable(obj, name, verifyProp) {
    var newValue = "unlikelyValue";

    try {
        obj[name] = newValue;
    } catch (e) {
        if (!e instanceof TypeError) {
            $ERROR("Expected TypeError, got " + e);
        }
    }

    if ((verifyProp && isEqualTo(obj, verifyProp, newValue)) ||
        isEqualTo(obj, name, newValue)) {
        return true;
    }

    return false;
}

function assertEqualTo(obj, name, value) {
    if (!isEqualTo(obj, name, value)) {
        $ERROR("Expected obj[" + name + "] to equal " + value +
                   ", actually " + obj[name]);
    }
}

function assertWritable(obj, name, verifyProp) {
    if (!isWritable(obj, name, verifyProp)) {
        $ERROR("Expected obj[" + name + "] to be writable, but was not.");
    }
}

function assertNotWritable(obj, name, verifyProp) {
    if (isWritable(obj, name, verifyProp)) {
        $ERROR("Expected obj[" + name + "] NOT to be writable, but was.");
    }
}

function assertEnumerable(obj, name) {
    if (!isEnumerable(obj, name)) {
        $ERROR("Expected obj[" + name + "] to be enumerable, but was not.");
    }
}

function assertNotEnumerable(obj, name) {
    if (isEnumerable(obj, name)) {
        $ERROR("Expected obj[" + name + "] NOT to be enumerable, but was.");
    }
}

function assertConfigurable(obj, name) {
    if (!isConfigurable(obj, name)) {
        $ERROR("Expected obj[" + name + "] to be configurable, but was not.");
    }
}

function assertNotConfigurable(obj, name) {
    if (isConfigurable(obj, name)) {
        $ERROR("Expected obj[" + name + "] NOT to be configurable, but was.");
    }
}

//-----------------------------------------------------------------------------
//Verify all attributes specified accessor property of given object:
//get, set, enumerable, configurable
//If all attribute values are expected, return true, otherwise throw
function accessorPropertyAttributesAreCorrect(obj,
                                              name,
                                              get,
                                              set,
                                              setVerifyHelpProp,
                                              enumerable,
                                              configurable) {
    var attributesCorrect = true;
    var prop = 'obj["' + name + '"]';

    if (get !== undefined) {
        assertEqualTo(obj, name, get());
    }

    if (typeof set !== "undefined") {
        assertWritable(obj, name, setVerifyHelpProp);
            }

    if (enumerable) {
        assertEnumerable(obj, name);
    } else {
        assertNotEnumerable(obj, name);
    }

    if (configurable) {


        assertConfigurable(obj, name);
    } else {
        assertNotConfigurable(obj, name);
    }

    return true;
}

//-----------------------------------------------------------------------------
//Verify all attributes specified data property of given object:
//value, writable, enumerable, configurable
//If all attribute values as expected, return true, otherwise throw
function dataPropertyAttributesAreCorrect(obj,
                                          name,
                                          value,
                                          writable,
                                          enumerable,
                                          configurable) {

    assertEqualTo(obj, name, value);

    if (writable) {
        assertWritable(obj, name);
    } else {
        assertNotWritable(obj, name);
    }

    if (enumerable) {
        assertEnumerable(obj, name);
    } else {
        assertNotEnumerable(obj, name);
    }

    if (configurable) {
        assertConfigurable(obj, name);
    } else {


        assertNotConfigurable(obj, name);
    }

    return true;
}
