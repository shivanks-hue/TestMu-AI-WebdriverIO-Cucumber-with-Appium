Feature: LambdaTest Proverbial App

  Scenario: User walks through the Proverbial app screens
    Given I launch the Proverbial app
    When I tap the color button
    And I tap the text field
    And I tap the toast button
    And I tap the notification button
    And I tap the speedTest button
    And I enter "https://www.testmuai.com/" in the url field
    And I tap the find button
    Then the app should respond without errors
