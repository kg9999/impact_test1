'use strict';

// loads all application configs. Scripts should use this file for all configs.

const path = require("path");
const file = require('../modules/file');

let configs = null;
try {
    const configPath = path.join(__dirname, 'config.json');
    configs = JSON.parse(file.readFileSync(configPath));
} catch (err) {
    throw err;
}

module.exports =  configs;