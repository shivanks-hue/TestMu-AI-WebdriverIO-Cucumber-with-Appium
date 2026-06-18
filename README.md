# WebdriverIO + Cucumber with Appium ![wdio](https://img.shields.io/badge/WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white) ![cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white) ![ts](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<p align="center">
<img height="500" src="https://user-images.githubusercontent.com/95698164/171863863-8f793cf6-62e9-463c-a4e4-91b340dd6728.png">
</p>

<p align="center">
  <a href="https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber" target="_bank">Blog</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber" target="_bank">Docs</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber" target="_bank">Learning Hub</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/newsletter/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber" target="_bank">Newsletter</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.lambdatest.com/certifications/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber" target="_bank">Certifications</a>
  &nbsp; &#8901; &nbsp;
  <a href="https://www.youtube.com/c/LambdaTest" target="_bank">YouTube</a>
</p>
&emsp;
&emsp;
&emsp;

_[WebdriverIO](https://webdriver.io/) is a next-gen browser and mobile automation framework, paired here with [Cucumber](https://cucumber.io/) for Gherkin-based BDD test scenarios and [Appium](https://appium.io/) for native app automation. This boilerplate runs Android and iOS **native app** tests and Android/iOS **mobile web** tests — single device and 3-device parallel — on [LambdaTest's real device cloud](https://www.lambdatest.com/mobile-app-testing/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber)._

_Learn the basics of [Appium testing on the LambdaTest platform](https://www.lambdatest.com/support/docs/getting-started-with-appium-testing/)._

[<img height="53" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## Table of Contents

- [What's included](#whats-included)
- [Pre-requisites](#pre-requisites)
- [Setting Up Your Authentication](#setting-up-your-authentication)
- [Run Your First Test](#run-your-first-test)
- [Running Against Your Own App](#running-against-your-own-app)
- [Project Structure](#project-structure)

## What's included

| Script | Platform | Target | Devices |
|---|---|---|---|
| `npm run android:app:single` | Android | Native app | 1 (Galaxy S20, Android 11) |
| `npm run android:app:parallel` | Android | Native app | 3 (Galaxy S20, Galaxy Note20, OnePlus 8 — Android 11) |
| `npm run ios:app:single` | iOS | Native app | 1 (iPhone, iOS 17) |
| `npm run ios:app:parallel` | iOS | Native app | 3 (iPhone 15, iPhone 15 Pro Max, iPhone 14 Pro Max — iOS 17) |
| `npm run android:web` | Android | Mobile Chrome | 1 (Galaxy S23, Android 13) |
| `npm run ios:web` | iOS | Mobile Safari | 1 (iPhone 15, iOS 17) |

App tests run against LambdaTest's **Proverbial sample app** by default — no app upload required to try the framework out of the box.

## Pre-requisites

Before you can start performing app and web automation testing with WebdriverIO + Appium, you would need to follow these steps:

- Download and install **Node.js**. Click [here](https://nodejs.org/en/) to download.
- Install **npm** (bundled with Node.js) — [npmjs.com](https://www.npmjs.com/)
- A [LambdaTest account](https://accounts.lambdatest.com/register) with a Username and Access Key

### Install dependencies

```bash
npm install
```

## Setting Up Your Authentication

Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber) or access the [Automation Dashboard](https://appautomation.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber).

Copy `.env.example` to `.env` and fill in your credentials, or export them directly in your shell:

**For Linux/macOS:**

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**For Windows (PowerShell):**

```powershell
$env:LT_USERNAME = "YOUR_LAMBDATEST_USERNAME"
$env:LT_ACCESS_KEY = "YOUR_LAMBDATEST_ACCESS_KEY"
```

All six configs in this repo already read these via `process.env.LT_USERNAME` / `process.env.LT_ACCESS_KEY` — no credentials are hardcoded in source.

## Run Your First Test

The app tests are pre-configured against LambdaTest's hosted **Proverbial sample app** (`lt://proverbial-android` / `lt://proverbial-ios`), so you can run them immediately without uploading anything:

```bash
npm run android:app:single
```

Your test results are displayed in the console and on the [LambdaTest App Automation Dashboard](https://appautomation.lambdatest.com/build/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber).

### Configuring your test capabilities

Capabilities live in each `wdio.*.conf.ts` file. Example from `wdio.android.app.single.conf.ts`:

```ts
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
]
```

And from `wdio.ios.app.single.conf.ts`:

```ts
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
            build: 'WDIO Cucumber iOS App - Single',
            name: 'iOS App Single Test',
            visual: true,
            video: true,
            w3c: true
        }
    }
]
```

You can generate capabilities for your own requirements with LambdaTest's [Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/beta/index.html). A detailed capability guide is available [here](https://www.lambdatest.com/support/docs/desired-capabilities-in-appium/).

### Executing the tests

```bash
# Web
npm run android:web
npm run ios:web

# App - single device
npm run android:app:single
npm run ios:app:single

# App - parallel (3 devices)
npm run android:app:parallel
npm run ios:app:parallel
```

Each run reports a build to your [LambdaTest App Automation](https://appautomation.lambdatest.com/) (for app tests) or Real Time dashboard, with video and visual logs (`video: true`, `visual: true` are enabled in every config).

## Running Against Your Own App

By default, the app configs point at LambdaTest's Proverbial sample app. To run against your own app:

1. Upload your `.apk` / `.ipa` via the [Automation Dashboard](https://appautomation.lambdatest.com/app), or using the REST API:

   **For Linux/macOS:**

   ```bash
   curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" \
   --location --request POST 'https://manual-api.lambdatest.com/app/upload/realDevice' \
   --form 'name="My_App"' \
   --form 'appFile=@"/path/to/your/app.apk"'
   ```

   **For Windows:**

   ```powershell
   curl -u "YOUR_LAMBDATEST_USERNAME:YOUR_LAMBDATEST_ACCESS_KEY" -X POST "https://manual-api.lambdatest.com/app/upload/realDevice" -F "appFile=@"/path/to/your/app.apk""
   ```

   The response is a JSON object containing the App URL, in the format `lt://APP123456789123456789`.

2. Paste it into the constant at the top of the relevant config file:

   ```ts
   // wdio.android.app.single.conf.ts / wdio.android.app.parallel.conf.ts
   const ANDROID_APP_URL = 'lt://APP1234567890'

   // wdio.ios.app.single.conf.ts / wdio.ios.app.parallel.conf.ts
   const IOS_APP_URL = 'lt://APP1234567890'
   ```

   Leaving the constant as `''` falls back to the Proverbial sample app.

   > Note: the existing `proverbial.feature` / `app.steps.ts` / `proverbial.screen.ts` are written specifically for the Proverbial app's UI. If you point at your own app, you'll need to write your own feature file, step definitions, and screen object for its actual screens — see [Project Structure](#project-structure) below for where those live.

## Project Structure

```
features/
├── app/                          # Native app tests
│   ├── proverbial.feature        # Gherkin scenario for the Proverbial sample app
│   ├── screens/
│   │   └── proverbial.screen.ts  # Element locators (resource-id on Android, name/XPath on iOS)
│   └── step-definitions/
│       └── app.steps.ts          # Step implementations
└── web/                          # Mobile browser tests
    ├── login.feature             # Gherkin scenario (the-internet.herokuapp.com login)
    ├── pageobjects/
    │   ├── page.ts
    │   ├── login.page.ts
    │   └── secure.page.ts
    └── step-definitions/
        └── steps.ts

wdio.android.app.single.conf.ts    # Android app, 1 device
wdio.android.app.parallel.conf.ts  # Android app, 3 devices
wdio.ios.app.single.conf.ts        # iOS app, 1 device
wdio.ios.app.parallel.conf.ts      # iOS app, 3 devices
wdio.android.web.conf.ts           # Android Chrome
wdio.ios.web.conf.ts               # iOS Safari

.env.example                       # Credential template
tsconfig.json                      # TypeScript + ts-node config
package.json                       # npm scripts + dependencies
```

Each config's `cucumberOpts.require` points at exactly one step-definition file (`app.steps.ts` for app configs, `steps.ts` for web configs) — both suites share their step definitions across all their respective configs, so adding a new scenario to `proverbial.feature` or `login.feature` doesn't require touching any config file.

## Documentation & Resources :books:

Visit the following links to learn more about LambdaTest's features, setup and tutorials around test automation, mobile app testing, responsive testing, and manual testing.

- [LambdaTest Documentation](https://www.lambdatest.com/support/docs/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber)
- [LambdaTest Blog](https://www.lambdatest.com/blog/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber)
- [LambdaTest Learning Hub](https://www.lambdatest.com/learning-hub/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber)

## LambdaTest Community :busts_in_silhouette:

The [LambdaTest Community](https://community.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber) allows people to interact with tech enthusiasts. Connect, ask questions, and learn from tech-savvy people. Discuss best practises in web development, testing, and DevOps with professionals from across the globe 🌎

## What's New At LambdaTest ❓

To stay updated with the latest features and product add-ons, visit [Changelog](https://changelog.lambdatest.com/)

## About LambdaTest

[LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber) is a leading test execution and orchestration platform that is fast, reliable, scalable, and secure. It allows users to run both manual and automated testing of web and mobile apps across 3000+ different browsers, operating systems, and real device combinations. Using LambdaTest, businesses can ensure quicker developer feedback and hence achieve faster go to market. Over 500 enterprises and 1 Million+ users across 130+ countries rely on LambdaTest for their testing needs.

### Features

- Run Selenium, Cypress, Puppeteer, Playwright, and Appium automation tests across 3000+ real desktop and mobile environments.
- Real-time cross browser testing on 3000+ environments.
- Test on Real device cloud
- Blazing fast test automation with HyperExecute
- Smart Visual Regression Testing on cloud
- 120+ third-party integrations with your favorite tool for CI/CD, Project Management, Codeless Automation, and more.
- Automated Screenshot testing across multiple browsers in a single click.
- Local testing of web and mobile apps.
- Online Accessibility Testing across 3000+ desktop and mobile browsers, browser versions, and operating systems.
- Geolocation testing of web and mobile apps across 53+ countries.
- LT Browser - for responsive testing across 50+ pre-installed mobile, tablets, desktop, and laptop viewports

[<img height="53" width="200" src="https://user-images.githubusercontent.com/70570645/171866795-52c11b49-0728-4229-b073-4b704209ddde.png">](https://accounts.lambdatest.com/register)

## We are here to help you :headphones:

- Got a query? we are available 24x7 to help. [Contact Us](mailto:support@lambdatest.com)
- For more info, visit - [LambdaTest](https://www.lambdatest.com/?utm_source=github&utm_medium=repo&utm_campaign=LT-wdio-cucumber)
