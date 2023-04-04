@ui-tests @api-tests
Feature: Todoist Projects
Background: Login into Todoist
    Given the user logged into Todoist

@test1 @delete-project-api
Scenario Outline: Create Project
    Given the user hovers the mouse on Projects label on the Vertical Menu
    And the user clicks the Add Project Icon on the Vertical Menu
    When the user create a project with data:
    | name      | color   |favorite   | view   |
    | <name>    | <color> |<favorite> | <view> |
    Then the user should see the New Project on the Vertical Menu
    Examples: 
    | name      | color   |favorite | view  |
    | projectA  | Blue    |checked  | board |
    | projectB  | Red     |none     | list  |
    | projectC  | Yellow  |none     | board |
    | projectD  | Green   |checked  | list  |
    | projectE  | Magenta |checked  | board |
