const exec = require("./index.js").default;

async function logger(text) {
  await exec(`echo ${text}`, { log: true });
}

for (let k = 0; k < 10; k++) {
  logger("worked!");
}
