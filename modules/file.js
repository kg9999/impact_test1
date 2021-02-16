'use strict';

const fs = require('fs');

const readFileSync = (path) => {
    return fs.readFileSync(path, 'utf-8');
}

const readFileSyncPromise = (path) => {
    return new Promise((resolve, reject) => {
        return resolve(fs.readFileSync(path, 'utf-8'));
    });
}

module.exports = {
    readFileSync: readFileSync,
    readFileSyncPromise: readFileSyncPromise
}