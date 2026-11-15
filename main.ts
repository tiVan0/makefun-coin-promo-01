import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const launchPath = resolve(botDir, "LAUNCH.json");
const launch = readFileSync(launchPath);
const parsed = JSON.parse(launch.toString("utf8"));
if (typeof parsed.mint !== "string" || typeof parsed.create_signature !== "string") {
  throw new Error("LAUNCH.json must carry mint and create_signature strings");
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "LAUNCH.json"), launch);
