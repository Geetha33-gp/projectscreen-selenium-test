location = require('chrome-location');
const headlessChromeOptions = ['--headless', '--disable-gpu', '--window-size=1280,800'];
var mochaTimeout = process.env.DEBUG ? 99999999 : 60000;

exports.config = {
    sync: true,
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: [
        './build/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: process.env.disable_headless === 'true' ? [] : headlessChromeOptions,
            binary: location
        }
    }],
    logLevel: 'info',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './results/errorShots/',
    baseUrl: 'http://global.test.web.projectscreen.co',
    waitforTimeout: 4000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'results',
    }]],
    mochaOpts: {
        timeout: mochaTimeout
    },
    beforeSession: function (config, capabilities, specs) {
        // const del = require('del');
        // del(['results']);
    },
    before: function() {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },
    afterTest: function(test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    }
}
