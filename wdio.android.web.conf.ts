// Run: npx wdio run ./wdio.android.web.conf.ts

const cucumberTimeout = 300000

export const config = {
    runner: 'local',

    hostname: 'mobile-hub.lambdatest.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    user: process.env.LT_USERNAME || 'YOUR_LT_USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR_LT_ACCESS_KEY',

    specs: ['./features/web/**/*.feature'],
    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:browserName': 'Chrome',
            'appium:deviceName': 'Galaxy S23',
            'appium:platformVersion': '13',
            'lt:options': {
                isRealMobile: true,
                build: 'WDIO Cucumber Android Web',
                name: 'Android Web Test',
                visual: true,
                video: true,
                w3c: true
            }
        }
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./features/web/step-definitions/steps.ts'],
        requireModule: ['ts-node/register'],
        timeout: cucumberTimeout,
        backtrace: false,
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        ignoreUndefinedDefinitions: false
    }
}
