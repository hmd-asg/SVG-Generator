const Cli = require('./lib/cli');

function init() {
    const cli = new Cli();
    cli.run();
}

init();