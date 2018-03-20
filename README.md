[![Build Status](https://travis-ci.org/devopsicon/users-microservice.svg?branch=develop)](https://travis-ci.org/devopsicon/users-microservice)
[![Maintainability](https://api.codeclimate.com/v1/badges/21c42597ec73a4d5d7f1/maintainability)](https://codeclimate.com/github/devopsicon/users-microservice/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/21c42597ec73a4d5d7f1/test_coverage)](https://codeclimate.com/github/devopsicon/users-microservice/test_coverage)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Docker Repository on Quay](https://quay.io/repository/devopsicon/usersmicroservice/status "Docker Repository on Quay")](https://quay.io/repository/devopsicon/usersmicroservice)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/devopsicon/javascript)

# users-microservice
Users microservice using NodeJS

In the future this microservice will use an in-memory database to save users, currently it has no real functionality.

## Testing locations
* [Unit and Integration](src/App.spec.ts)

## DevOps Automation Notes
* TravisCI configuration is via .travis.yml file
* Docker configuration is via Dockerfile

## Contribution Notes
1. This project uses NodeJS with Typescript and Express
2. All tests must be done as pre-merged checks
3. master and development branches is protected and only way to contribute is via Pull-Request
4. Unit and Integration testing coverage is monited via CodeClimate 

