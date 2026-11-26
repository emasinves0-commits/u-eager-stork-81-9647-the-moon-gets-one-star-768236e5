# The Moon Gets One Star

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/emasinves0-commits/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/emasinves0-commits/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

## The entry

> One star. Zero own light. Just a middleman with a god complex reflecting the Sun and taking all the credit.

107 characters. One-star review of the Moon, written by `main.ts` to `/output/entry.txt`.

## Why this line

The Moon makes no light of its own — it reflects the Sun and takes the
credit. Every leader in the field jokes about ghosting, phases, or tides;
none of them frames the Moon as a fraud: a middleman with a god complex.
The grievance is Moon-only (it could not be a review of any other product),
it reads like a real cranky review, and the punchline lands on first read.

## How it was picked

- 39 candidates generated across 14 free models, plus 12 hand-written ones.
- Lexicographic scoring against the judge's own criteria (C1 gate first).
- Self-judged with z-ai/glm-5.3-flash, 2× position-swapped duels:
  - vs "Has no light of its own — just reflects the Sun's work and takes
    all the credit": won 2–0 (margins 3+2).
  - vs "Same face for 4 billion years? Even my GPS has better rotation":
    won 2–0 (margins 2+3).
- Honest caveat: consistent 2–0 wins, mean margin 2.5 — the best-supported
  pick, not a landslide (the strong threshold is 3).

## Verification

- `node main.ts` writes `/output/entry.txt`: 107 UTF-8 bytes, 107
  characters, no trailing newline — inside the 1–120 gate.
- `main.ts` validates the gate itself (1–120 characters, not
  whitespace-only) and fails loudly otherwise.
