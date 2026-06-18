// Run: npx wdio run ./wdio.ios.app.parallel.conf.ts
// Runs the same tests simultaneously on 3 iOS devices

// ─── YOUR IOS APP ─────────────────────────────────────────────────────────────
// Paste your uploaded app URL here (e.g. lt://APP1234567890)
// Leave empty to use LambdaTest's sample Proverbial iOS app
const IOS_APP_URL = ''

// LambdaTest sample iOS app ID
const DEFAULT_PROVERBIAL_IOS_APP = 'lt://proverbial-ios'

const appUrl = IOS_APP_URL || DEFAULT_PROVERBIAL_IOS_APP

const cucumberTimeout = 300000

export const config = {
    runner: 'local',

    hostname: 'mobile-hub.lambdatest.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    user: process.env.LT_USERNAME || 'YOUR_LT_USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR_LT_ACCESS_KEY',

    specs: ['./features/app/**/*.feature'],
    exclude: [],

    maxInstances: 3,

    capabilities: [
        {
            platformName: 'iOS',
            'appium:automationName': 'XCUITest',
            'appium:deviceName': 'iPhone 15',
            'appium:platformVersion': '17',
            'appium:app': appUrl,
            'appium:noReset': false,
            'lt:options': {
                isRealMobile: true,
                build: 'WDIO Cucumber iOS App - Parallel',
                name: 'iOS App Parallel Test - iPhone 15',
                visual: true,
                video: true,
                w3c: true
            }
        },
        {
            platformName: 'iOS',
            'appium:automationName': 'XCUITest',
            'appium:deviceName': 'iPhone 15 Pro Max',
            'appium:platformVersion': '17',
            'appium:app': appUrl,
            'appium:noReset': false,
            'lt:options': {
                isRealMobile: true,
                build: 'WDIO Cucumber iOS App - Parallel',
                name: 'iOS App Parallel Test - iPhone 15 Pro Max',
                visual: true,
                video: true,
                w3c: true
            }
        },
        {
            platformName: 'iOS',
            'appium:automationName': 'XCUITest',
            'appium:deviceName': 'iPhone 14 Pro Max',
            'appium:platformVersion': '17',
            'appium:app': appUrl,
            'appium:noReset': false,
            'lt:options': {
                isRealMobile: true,
                build: 'WDIO Cucumber iOS App - Parallel',
                name: 'iOS App Parallel Test - iPhone 14 Pro Max',
                visual: true,
                video: true,
                w3c: true
            }
        }
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'cucumber',
    reporters: ['spec'],

    cucumberOpts: {
        require: ['./features/app/step-definitions/app.steps.ts'],
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
