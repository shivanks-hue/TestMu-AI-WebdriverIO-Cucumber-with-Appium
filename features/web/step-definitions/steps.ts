import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

const pages: Record<string, typeof LoginPage> = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page: string) => {
    await pages[page].open()
})

When(/^I login with (\w+) and (.+)$/, async (username: string, password: string) => {
    await LoginPage.login(username, password)
})

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    await expect(SecurePage.flashAlert).toBeExisting()
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message))
})
