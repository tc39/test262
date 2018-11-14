# Conventions for the class fields templates and cases

Templates should produce a class named `C` and instantiate it to an object named `c`.

## Known template fields:

* fields: it should contain the list of class fields, inserted in the class body. Please, avoid closing a field with a trailing semi-colon, this might prevent ASI checks properly.
* assertions: it should contain the assertions to run after the class object is instantiated.
