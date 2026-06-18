// Run: npx wdio run ./wdio.android.app.single.conf.ts

// ─── YOUR ANDROID APP ────────────────────────────────────────────────────────
// Paste your uploaded app URL here (e.g. lt://APP1234567890)
// Leave empty to use LambdaTest's sample Proverbial Android app
const ANDROID_APP_URL = ''
// ─────────────────────────────────────────────────────────────────────────────

// Default sample app ID from LambdaTest
const DEFAULT_PROVERBIAL_APP = 'lt://proverbial-android'

const appUrl = ANDROID_APP_URL || DEFAULT_PROVERBIAL_APP

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

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Galaxy S20',
            'appium:platformVersion': '11',
            'appium:app': appUrl,
            'appium:noReset': false,
            'lt:options': {
                isRealMobile: true,
                appiumVersion: '1.22.3',
                build: 'WDIO Cucumber Android App - Single',
                name: 'Android App Single Test',
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
