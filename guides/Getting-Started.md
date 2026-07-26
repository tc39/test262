# Getting Started With Test262


Rough outline...


- Why do we test?
- What do we test?
  - Similar to https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#acceptable-tests and https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#unacceptable-tests
- Anatomy of a test
  - frontmatter
    - esid
    - description
    - don't mention any other frontmatter
  - test code
    - assert api
- Let's write a test, end to end.
  - Pre-work
    - Find something that needs to be tested
    - Read spec
    - Create test plan
      - This can be a super minimal version of the usual test plans, but will help to show how we work
        - Write a checklist (we'll give a 2-3 point example to work from)
          - Examples:
            - https://github.com/tc39/test262/issues/2511
            - https://github.com/tc39/test262/issues/1237
      - Does it need a new feature tag?
    - Share test plan
  - Writing our first test
    - Git stuff
      - Pull test262 repo
      - Create a branch
      - What else?
    - Create a new file
      - Where? Why?
      - What do I name it? Why?
    - Copyright
      - Link to https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#copyright
      - Give example
    - Frontmatter
      - What goes here? Why?
        - Link to https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#copyright
        - Always required
          - [`esid`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#esid)
            - Show examples
          - [`description`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#description)
            - Show examples
        - Always required for async tests
          - [`flags: [async]`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#flags)
            - Link to examples
        - Always required for module tests
          - [`flags: [module]`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#flags)
            - Link to examples
        - Always required for stage 3 features
          - [`features: [...]`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#features)
            - Link to examples
        - Always required if tests need additional test helper functionality
          - [`includes: [...]`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#includes)
            - Link to examples
        - Always required for syntax tests that are intentionally expected to fail (More on this in a follow up guide)
          - [`negative`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#negative)
            - Give examples
        - Helpful to have
          - [`info`](https://github.com/tc39/test262/blob/main/CONTRIBUTING.md#info)
            - Give examples
            - Link to examples
    - Body
      - Show examples "good", "better", "best"
- Run our test
  - Links to Running-Tests.md
  - Shows minimal run example, ie. "If we've already read Running-Tests.md and set up a test running environment, go ahead and execute this command..."
- What else could be tested?
- Commit code
- Push branch
- Open PR
- Ask for review
  - Who?
    - We need a list of people that will likely respond


