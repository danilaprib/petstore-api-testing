[![Playwright Tests](https://github.com/danilaprib/petstore-api-testing/actions/workflows/playwright.yml/badge.svg)](https://github.com/danilaprib/petstore-api-testing/actions/workflows/playwright.yml)

# REST API Testing Suite for Swagger Petstore

## Overview
This is a Playwright REST API test suite for Swagger Petstore sample hosted at https://petstore.swagger.io/#/

![API Execution Flow](https://imagedelivery.net/PVooPtpJE-25QaNkbEuXvw/0117d73b-b327-45ff-f333-0af511c52b00/public)

## How to run
1. Clone the repository
2. Run all the tests using `npx playwright test` command in console
3. Show HTML test report using `npx playwright show-report`

## Test coverage

### Pet endpoint

#### GET tests: 
- Get all pets with the same status
- Get pet by ID

#### POST tests: 
- Upload image file for a pet

#### CRUD tests:
- Adding a new pet using POST and updating its name using PUT

### Store endpoint

#### GET tests: 
- Get all inventories by status
- Get order by ID

#### POST tests: 
- Place a new order

#### CRUD tests:
- Creating a new order using POST, fetch it by its ID using GET and DELETE it
