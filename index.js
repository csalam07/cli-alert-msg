/**
 * CLI Alerts Msg.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author csalam07 <https://twitter.com/CSALam12/>
 */

import chalk from "chalk";
import cliSymbolsLog from "cli-symbols-log";

const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.hex("#FFA500");
const orangeI = chalk.hex("#FFA500").inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

export default function (options) {
  const defaultOptions = {
    type: `error`,
    msg: `I forgot to define all options.`,
    name: ``,
  };
  const opts = { ...defaultOptions, ...options };
  const { type, msg, name } = opts;
  const printName = name ? name : type.toUpperCase();

  if (type === `success`) {
    console.log(
      `\n${cliSymbolsLog.success} ${greenI(` ${printName} `)} ${green(msg)}\n`
    );
  }

  if (type === `warning`) {
    console.log(
      `\n${cliSymbolsLog.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`
    );
  }

  if (type === `info`) {
    console.log(
      `\n${cliSymbolsLog.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`
    );
  }

  if (type === `error`) {
    console.log(
      `\n${cliSymbolsLog.error} ${redI(` ${printName} `)} ${red(msg)}\n`
    );
  }
}
