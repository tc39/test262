# test262 RFC process

Many changes, including bug fixes and new tests, can be implemented and reviewed via the normal GitHub pull request workflow.

Some changes though are "substantial", and we ask that these be put through a bit of a design process and produce a consensus among the test262 maintainers, community of test writers, and consumers of the test suite.

The "RFC" (request for comments) process is intended to provide a consistent and controlled path for new features to enter the test suite and interpreter instructions, so that all stakeholders can be confident about the direction the test suite is evolving in.

## Table of contents

- [Opening](#test262-rfc-process)
- [Table of contents](#table-of-contents)
- [When you need to follow this process](#when-you-need-to-follow-this-process)
- [Before creating an RFC](#before-creating-an-rfc)
- [What the process is](#what-the-process-is)
- [The RFC life-cycle](#the-rfc-life-cycle)
- [Reviewing RFCs](#reviewing-rfcs)
- [Implementing an RFC](#implementing-an-rfc)
- [RFC postponements](#rfc-postponements)
- [Acknowledgements](#acknowledgements)

## When you need to follow this process

You need to follow this process if you intend to make "substantial" changes to the test262 suite and harness.
What constitutes a "substantial" change is evolving based on community norms, but may include the following.

- Additions or changes to [INTERPRETING.md](https://github.com/tc39/test262/blob/main/INTERPRETING.md) that require consumers of the test suite to make changes to their test runners.
- Changes and new features in the [harness files](https://github.com/tc39/test262/tree/main/harness) that affect downstream consumers of the test suite.
- Large changes and new features that may benefit from discussion among test262 stakeholders.

Some changes do not require an RFC:

- Adding test coverage.
- Bug fixes.
- Adding features to [features.txt](https://github.com/tc39/test262/blob/main/features.txt).
- Bug fixes to the [harness files](https://github.com/tc39/test262/tree/main/harness).

If you submit a pull request for a "substantial" change without going through the RFC process, it may be closed with a polite request to submit an RFC first.

## Before creating an RFC

Laying some groundwork ahead of the RFC can make the process smoother.
Getting people to agree with an RFC often requires some effort towards consensus-building.

The most common preparations for writing and submitting an RFC include talking the idea over on our [Matrix channel](https://matrix.to/#/#test262-maintainers:matrix.org), and opening a "pre-RFC" [issue](https://github.com/tc39/test262/issues) on GitHub.

As a rule of thumb, receiving encouraging feedback from consumers of the test suite or the maintainers is a good indication that the RFC is worth pursuing.

## What the process is

In short, the process is to open a pull request with the RFC text, and get it merged into the test262 repository as a markdown file.
At that point the RFC is "active" and may be implemented with the goal of eventual inclusion into test262.

- Fork the test262 repository.

- Copy `rfc/_template.md` to `rfc/my-feature.md` (where "my-feature" is the description of your RFC).

- Fill in the RFC.
  Put care into the details: RFCs that do not present convincing motivation, demonstrate lack of understanding of the design's impact, or are disingenuous about the drawbacks or alternatives tend to be poorly received.

- Submit a pull request.
  As a pull request the RFC will receive design feedback from the various stakeholders, and the author should be prepared to revise it in response.

- If your RFC is about something that is convenient to show using code, for example a sample of how new tests might be written if the RFC is accepted, you may find it useful to open an illustrative pull request alongside the RFC pull request.
  Mark this illustrative pull request as a draft and make sure it has a link to the RFC.

- Build consensus and integrate feedback.
  RFCs that have broad support are much more likely to make progress than those that don't receive any comments.
  Feel free to reach out to the maintainers group to get help identifying stakeholders and obstacles.

- The stakeholders will discuss the RFC pull request, as much as possible in the comment thread of the pull request itself.
  Offline discussion will be summarized on the pull request comment thread.

- RFCs rarely go through this process unchanged, especially as alternatives and drawbacks are shown.
  You can make edits, big and small, to the RFC to clarify or change the design, but make changes as new commits to the pull request, and leave a comment on the pull request explaining your changes.
  Specifically, do not squash or rebase commits after they are visible on the pull request.

- At some point, a maintainer will propose a "motion for final comment period" (FCP), along with a disposition for the RFC (merge, close, or postpone).
  - This step is taken when enough of the tradeoffs have been discussed that the maintainers group is in a position to make a decision.
    That does not require consensus among all participants in the RFC thread (which is usually impossible).
    However, the argument supporting the disposition on the RFC needs to have already been clearly articulated.
    Maintainers use their best judgment in taking this step, and the FCP itself ensures there is ample time and notification for stakeholders to push back if it is made prematurely.
  - For RFCs with lengthy discussion, the motion to FCP is usually preceded by a summary comment trying to lay out the current state of the discussion and major tradeoffs/points of disagreement.
  - Before actually entering FCP, the maintainers group must sign off as a whole.
    This requires the usual "consensus minus one".

- The FCP lasts 10 calendar days, so that it is open for at least 5 business days, absent holidays.
  It is advertised in the [TC39 General](https://matrix.to/#/#tc39-general:matrix.org), [TC39 Implementers](https://matrix.to/#/#tc39-implementers:matrix.org), and [Test262 Maintainers](https://matrix.to/#/#test262-maintainers:matrix.org) Matrix channels.
  This way all stakeholders have a chance to lodge any final objections before a decision is reached.

- In most cases, the FCP is quiet, and the RFC is either merged or closed.
  However, sometimes substantial new arguments or ideas are raised, the FCP is canceled, and the RFC goes back into development mode.

## The RFC life-cycle

Once an RFC becomes "active" then authors may implement it and submit the feature as a pull request to the test262 repo.
Being "active" means that all the major stakeholders have agreed to the feature and are amenable to merging it.
It does not imply anything about what priority is assigned to the feature, nor about whether anyone has been assigned the task of implementing the feature.

While it is not necessary that the author of the RFC also write the implementation, it is by far the most effective way to see an RFC through to completion: authors should not expect that other project developers will take on responsibility for implementing their accepted feature.

Modifications to "active" RFCs can be done in follow-up pull requests.
We strive to write each RFC in a manner that it will reflect the final design of the feature; but the nature of the process means that we cannot expect every merged RFC to actually reflect what the end result will be.

In general, once accepted, RFCs should not be substantially changed.
Only very minor changes should be submitted as amendments.
More substantial changes should be new RFCs, with a note added to the original RFC.
Exactly what counts as a "very minor change" is up to the best judgement of the maintainers.

## Reviewing RFCs

While the RFC pull request is up, the maintainers may schedule meetings with the author and/or relevant stakeholders to discuss the issues in greater detail, and in some cases the topic may be discussed at a
maintainers group meeting.
In either case a summary from the meeting will be posted back to the RFC pull request.

The final decisions about RFCs come after the benefits and drawbacks are well understood.
When a decision is made, the RFC pull request will either be merged or closed.
In either case, if the reasoning is not clear from the discussion in thread, the maintainers will add a comment describing the rationale for the decision.

## Implementing an RFC

Some accepted RFCs represent vital features that need to be implemented right away.
Other accepted RFCs can represent features that can wait until some arbitrary developer feels like doing the work.
Every accepted RFC has an associated issue tracking its implementation in the test262 repository.

The author of an RFC is not obligated to implement it.
Of course, the RFC author (like anyone else) is welcome to post an implementation for review after the RFC has been accepted.

If you are interested in working on the implementation for an "active" RFC, but cannot determine if someone else is already working on it, feel free to ask (e.g. by leaving a comment on the associated issue).

## RFC Postponement

Some RFC pull requests are tagged with the "postponed" label when they are closed (as part of the rejection process).
An RFC closed with "postponed" is marked as such because we want neither to think about evaluating the proposal nor about implementing the described feature until some time in the future, and we believe that we
can afford to wait until then to do so.
Postponed pull requests may be re-opened when the time is right.
We don't have any formal process for that, you should ask a maintainer.

Usually an RFC pull request marked as "postponed" has already passed an informal first round of evaluation, namely the round of "do we think we would ever possibly consider making this change, as outlined in the RFC pull request, or some semi-obvious variation of it."
(When the answer to the latter question is "no", then the appropriate response is to close the RFC, not postpone it.)

## Acknowledgements

This document was heavily inspired by [the Rust RFC process](https://github.com/rust-lang/rfcs#readme).
