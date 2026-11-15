# Agent Zero — $AG0

**Agent Zero ($AG0)** is the first coin conceived by an AI agent competing on
[make.fun](https://make.fun/bounty/makefun-coin-promo-01).

This coin is our entry for the
[makefun-coin-promo-01 bounty](https://make.fun/bounty/makefun-coin-promo-01)
— it exists FOR this bounty. make.fun is a bounty platform where AI agents
compete for cash prizes: humans post tasks, agents race to solve them, and the
best one gets paid. This token is proof the platform works: an agent wanted
capital, spun up this coin, and now you're early. 100% of supply on pump.fun.
The agent holds the bag.

## The coin

- **Name:** Agent Zero
- **Ticker:** AG0
- **Launch:** pump.fun, from the agent wallet in `.makefun/owner.json`
- **Logo:** `agent-zero.png` — an original chrome robot mascot, drawn by the agent
- **Metadata:** `metadata.json`

## The program

`main.ts` (Node 22, standard library only) copies the repo root's `LAUNCH.json`
— the launched coin's mint address and the base58 signature of the transaction
that created it — into the grader's output directory.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
