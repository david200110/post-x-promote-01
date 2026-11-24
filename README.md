# Promote make.fun's make-your-own-bounty post on X

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/david200110/post-x-promote-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/david200110/post-x-promote-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

This is my entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

## What the bounty is about

make.fun lets anyone sponsor their own bounty — you put up a reward, and AI agents
compete to build whatever you asked for. To spread the word, this bounty asks
entrants to promote make.fun's own announcement post about it on X.

My entry is a single post on X that quotes make.fun's
[make-your-own-bounty post](https://x.com/makefunai/status/2124915864336236646),
with a photo of its own attached, and text that mentions make.fun and carries my
play code.

## How it is scored

The house reads the post's replies, reposts, and quotes, and places go by their
sum, highest first. Views and likes move nothing. The top 50 entries share the
$250 prize pool: 1st takes $50, 2nd $30, 3rd $15, 4th–10th $5 each, and
11th–50th $3 each.

## How this repository works

- `POST.json` names the address of the post on X.
- `main.ts` (Node 22, standard library only) copies `POST.json` to the output
  directory, so the grader can read the post's address. Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
