import { writeFile, readFile } from "fs/promises";
import path from "path";

const file = path.join(process.cwd(), "data", "usage.json");

interface Log {
  time: string;
  route: string;
  tokens: number;
  cost: number;
}

export const usageTracker = {
  async log(route: string, tokens: number, promptTokens?: number) {
    const input = promptTokens ?? Math.round(tokens / 2);
    const output = tokens - input;

    // rough cost for gpt-4o-mini style pricing
    const cost =
      (input * 0.00015) / 1000 + (output * 0.0006) / 1000;

    const log: Log = {
      time: new Date().toISOString(),
      route,
      tokens,
      cost
    };

    const data = JSON.parse(
      (await readFile(file, "utf8").catch(() => "[]")) as string
    ) as Log[];

    data.push(log);
    await writeFile(file, JSON.stringify(data.slice(-100)));
  },

  async getToday() {
    const data: Log[] = JSON.parse(
      (await readFile(file, "utf8").catch(() => "[]")) as string
    );
    const today = new Date().toISOString().split("T")[0];
    const todayLogs = data.filter((l) => l.time.startsWith(today));
    const cost = todayLogs.reduce((a, b) => a + b.cost, 0);
    const tokens = todayLogs.reduce((a, b) => a + b.tokens, 0);
    return { cost, tokens, logs: todayLogs.slice(-20) };
  }
};
