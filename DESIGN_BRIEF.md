# Design Brief — sandy-project

_Last updated: 2026-04-21 · Owner: Sandy Tran_

## 1. Problem
What problem are we solving, and for whom? Describe the current pain in one or two sentences. Include a concrete example of where this shows up today.

> _e.g., Security analysts triaging alerts lose ~20 minutes per incident chasing context across three consoles._

## 2. Users
Who is this for? List primary and secondary user types with a short sentence on their goals and constraints.

- **Primary:** _who they are, what they care about_
- **Secondary:** _who also benefits, but isn't the focus_
- **Not for:** _who we explicitly aren't designing for (useful for scoping)_

## 3. Goals
What does success look like from the user's perspective? Keep it outcome-focused, not feature-focused.

- [ ] _e.g., Surface the three things an analyst needs to decide "escalate or dismiss" on one screen_
- [ ] _e.g., Reduce context-switching between tools during triage_
- [ ] _e.g., ..._

## 4. Non-goals
What are we explicitly not tackling in this iteration? Useful for keeping scope tight.

- _e.g., Full report generation — that lives in the existing reporting flow_
- _e.g., Mobile layouts — desktop-first for v1_

## 5. Success metrics
How will we know this worked? Pick 2–3 measurable signals.

| Metric | Current | Target | How we measure |
| --- | --- | --- | --- |
| _Time to triage_ | _~20m_ | _<8m_ | _Instrumented timer from alert open → decision_ |
| _Task completion rate_ | _—_ | _>85%_ | _Usability test with 5 analysts_ |
| _Qualitative confidence_ | _—_ | _4/5_ | _Post-task survey_ |

## 6. Key flows
List the user journeys this prototype needs to cover. One line each; link out to detailed flows as they emerge.

1. _Entry → primary task → confirmation_
2. _Error / edge case path_
3. _Recovery / undo path_

## 7. Constraints & assumptions
Anything that will shape the design — technical, brand, time, data availability.

- _Must integrate with existing auth_
- _Prototype is throwaway — no production code requirements_
- _Assumption: users are on a large desktop display (≥1440px)_

## 8. Open questions
Things we need to answer before / during design. Tag owners.

- [ ] _Do we have access to live alert data for the prototype? (@owner)_
- [ ] _Is the existing design system in scope, or do we branch? (@owner)_

## 9. References
Prior art, inspiration, related work.

- _Link to existing flow in production_
- _Competitor example / inspiration_
- _Relevant research notes_

---

_Iterate in public. Update this doc as the prototype evolves — the brief is a living artifact, not a contract._
