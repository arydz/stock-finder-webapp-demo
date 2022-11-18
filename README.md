# StockFinderWebapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7

## Required installations (described in following points)
```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 14.2.7
Node: 18.12.0 (Unsupported)
Package Manager: npm 8.19.2
OS: win32 x64

Angular: 14.2.8
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1402.7
@angular-devkit/build-angular   14.2.7
@angular-devkit/core            14.2.7
@angular-devkit/schematics      14.2.7
@angular/cdk                    14.2.6
@angular/cli                    14.2.7
@angular/material               14.2.6
@schematics/angular             14.2.7
rxjs                            7.5.7
```

## How to run

### Helpful but, not required
1. Install NVM (Node Version mannager) https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/
2. Use version 14.2.7

### Install NodeJs and NPM
1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en) or via NVM
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli``` or install specific version ```npm install -g @angular/cli@14.2.7```
  - https://stackoverflow.com/questions/43344600/how-to-install-a-specific-version-of-angular-with-angular-cli
5. Then: ```npm install```
  - if errors received and sudo can't be used (also it's no suggested)
  - fixing npm permission issue, with:
    ```
    - Run “npm config get prefix” in your terminal. This will give the path of global node_modules: For ex: /usr/local
    - Change the user permissions for this folder by using following command:
    - sudo chown -R <user_id> /usr/local/

    Navigate to your application folder where your local node_modules reside.
    - Run the similar command
    - sudo chown -R <user_id> node_modules/
    ```
  - Useful link https://kaustubhtalathi.medium.com/fixing-npm-permission-issue-f3d88a7a4ab4
6. (Optional) Adjusting angular-devkit/build-angular can be required
  - use this command `npm i @angular-devkit/build-angular@14.2.7 --force`

### Docker
1. Build docker image with this command `docker build -t stock-finder-webapp-demo:latest .`
2. Start docker container based on this image with this command `docker run -p 4200:4200 --name docker-sf-web-demo stock-finder-webapp-demo`
   1. Instead of a docker command, running webapp container can be done via `docker compose up` command , available in this repository: https://github.com/arydz/stock-finder-service-demo/tree/master/docker
   2. This approach makes also a service application starts
   3. Stock finder service requires to run infrastructure containers, from this file https://github.com/arydz/stock-finder-service-demo/blob/master/docker/docker-compose.infrastructure.yaml 

### Run application

1. Use command ```ng serve```
2. Navigate to: [http://localhost:4200/](http://localhost:4200/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
