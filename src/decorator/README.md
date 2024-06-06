# Decorator Test Notes

## Terminology

Some terms are simplified in these tests to make it easier to communicate
meaning and intent.

- **static** is used to refer to all class elements that are used with the
  `static` keyword, including fields and methods. This should be thought of as
  "elements that belong to the class definition".

- **instance** is used to refer to all class elements that are used _without_
  the static keyword, including fields and methods. This should be thought as
  "elements that belong to the class instance". Some of these elements are
  assigned to the class prototype rather than the instance, but from a typical
  usage perspective, a user will only call these methods when dealing with an
  instance of the class. Most users do not ever deal directly with the class
  prototype.

- **methods** refers to all public/private _methods_, _getters_, and _setters_.
  These are elements that do _not_ have a per-instance initializer, and for this
  reason they are grouped together for things like initialization and decorator
  application.

- **fields** refers to all public/private _fields_ and _accessors_. Accessors
  here refers to auto-accessors created with the `accessor` keyword, _NOT_
  getters and setters created with the `get` and `set` keywords. These are
  elements that _have_ an initialization step per-instance, and grouped
  together for initialization and decorator application for that reason.

- **Extra-initializers** refers to all initializers added via
  `context.addInitializer`. This distinguishes them from standard initializers
  for fields and accessors, which run in a different order and with different
  timing.

## Structure

- Element decorator templates all follow the same basic structure in order to
  share as much code as possible for repeated tests.

  - The class element being tested is named `element` for public elements and
    `#element` for private elements.

  - If the element is gettable, there is a `getElement` public method that
    directly gets the element. If the element is a field, accessor, or getter,
    this will call any getters and return the value. If it is a method, it will
    return the method itself. Setters are not gettable.

  - These is a `setElement` public method that directly sets the element. If the
    element is a field, accessor, or setter, this will call any setters and set
    the value. Getters and methods are not settable.

- Each element template folder is broken down into the following directory
  structure:

  ```
  .
  └── [element type]/
      └── [test case type]/
          ├── private/
          │   ├── instance/
          │   │   ├── cls-decl.template
          │   │   └── cls-expr.template
          │   └── static/
          │       ├── cls-decl.template
          │       └── cls-expr.template
          └── public/
              ├── instance/
              │   ├── cls-decl.template
              │   └── cls-expr.template
              └── static/
                  └── cls-decl.template/
                  └── cls-expr.template
  ```

  This structure allows each test to easily select the types of values it
  applies to and test them across both class declarations and expressions.
  Private and public are split out because there are some common differences
  between them (e.g. `context.private`, `context.name`) and the same is true for
  static vs instance (e.g. `context.static`).


