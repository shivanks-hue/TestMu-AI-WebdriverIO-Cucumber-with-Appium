import { $, browser } from '@wdio/globals'

const androidLocator = (id: string) => `//*[@resource-id="com.lambdatest.proverbial:id/${id}"]`
const iosLocator = (id: string) => `//*[@name="${id}"]`

const locator = (id: string, iosOverride?: string) => {
    if (browser.isIOS) {
        return iosOverride ?? iosLocator(id)
    }
    return androidLocator(id)
}

class ProverbialScreen {
    get colorButton() {
        return $(locator('color'))
    }

    get textField() {
        return $(locator('Text', '//*[@name="Text" and @type="XCUIElementTypeButton"]'))
    }

    get toastButton() {
        return $(locator('toast'))
    }

    get notificationButton() {
        return $(locator('notification'))
    }

    get speedTestButton() {
        return $(locator('speedTest'))
    }

    get urlField() {
        return $(locator('url'))
    }

    get findButton() {
        return $(locator('find'))
    }
}

export default new ProverbialScreen()
