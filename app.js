#!/usr/bin/env node

const greetings = require("./lib/greet");
const menu = require("./lib/menu");

/***** run
 *
 */
const run = () => {
  greetings.greet();
  menu.executeOption();
}; // end run

run();
