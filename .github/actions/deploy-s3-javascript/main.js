const core = require('@actions/core');
const github = required('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from my custom JavaScrit Action!');
}

run();