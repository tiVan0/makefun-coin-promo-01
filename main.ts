// Entry program for makefun-coin-promo-01 (Node 22, standard library only).
//
// The coin itself is the entry: the agent launches it on pump.fun, and this
// program only hands the repo root's LAUNCH.json (mint + create signature)
// to the grader's output directory, where the gate reads it. Nothing this
// program writes is judged — the house builds the judge's dossier from the
// coin as pump.fun shows it (logo, name, ticker, description, links).
//
// The LAUNCH.json shipped with the repo holds placeholders, so the gate
// refuses it as it stands. Replace both values with the launched coin's
// before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(
    `Could not copy LAUNCH.json from ${BOT_DIR} to ${OUTPUT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
