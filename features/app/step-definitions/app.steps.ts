import { Given, When, Then } from '@wdio/cucumber-framework'
import { browser } from '@wdio/globals'
import ProverbialScreen from '../screens/proverbial.screen'

const ELEMENT_TIMEOUT = 15000

Given(/^I launch the Proverbial app$/, async () => {
    await ProverbialScreen.colorButton.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
})

When(/^I tap the color button$/, async () => {
    await ProverbialScreen.colorButton.click()
})

When(/^I tap the text field$/, async () => {
    await ProverbialScreen.textField.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
    await ProverbialScreen.textField.click()
})

When(/^I tap the toast button$/, async () => {
    await ProverbialScreen.toastButton.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
    await ProverbialScreen.toastButton.click()
})

When(/^I tap the notification button$/, async () => {
    await ProverbialScreen.notificationButton.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
    await ProverbialScreen.notificationButton.click()
})

When(/^I tap the speedTest button$/, async () => {
    await ProverbialScreen.speedTestButton.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
    await ProverbialScreen.speedTestButton.click()
})

When(/^I enter "([^"]*)" in the url field$/, async (url: string) => {
    await ProverbialScreen.urlField.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
    await ProverbialScreen.urlField.setValue(url)
})

When(/^I tap the find button$/, async () => {
    await ProverbialScreen.findButton.waitForDisplayed({ timeout: ELEMENT_TIMEOUT })
    await ProverbialScreen.findButton.click()
})

Then(/^the app should respond without errors$/, async () => {
    await browser.pause(1000)
})
