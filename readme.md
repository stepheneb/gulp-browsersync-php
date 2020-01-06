Live reloading of PHP files displayed in browser during development when changes to files are saved.

## Development Prerequisites

1. Install nvm: https://github.com/nvm-sh/nvm
2. Use `nvm` to install node v12.14.0.
```
$ nvm install v12.14.0
```
3. Install gulp: https://gulpjs.com/docs/en/getting-started/quick-start

## Project Initialization

1. Clone project https://github.com/stepheneb/gulp-browsersync-html
2. Move to project directory.
    ```
    $ cd gulp-browsersync-php
    ```
3. Install required npm modules.
    ```
    $ npm install
    ```

## Startup local server using gulp.
1. Move to project directory.
    ```
    $ cd gulp-browsersync-html
    ```
2. Tell `nvm` to use version of node used in this project (v12.14.0).
    ```
    $ nvm use
    ```

2. Start server using default gulp task. This will also open web page in your default browser at: http://localhost:3000/
    ```
    $ gulp
    ```

## Interactive Development

When the default gulp task is running changes made to html files will be reflected in the browser.

## References

### Node.js

Node is a JavaScript runtime built on Chrome's V8 JavaScript engine.

This project is tested using Node v12.14.0.

https://nodejs.org/docs/v12.14.0/api/

### nvm

https://github.com/nvm-sh/nvm

Node Version Manager is a POSIX-compliant bash script to manage multiple active node.js versions

### Gulp

Gulp is a task managements system running on node with tasks described in JavaScript.

Quick Start https://gulpjs.com/docs/en/getting-started/quick-start

I'm writing the scripts using CJS (CommonJS) for module references. This is the same architecture as used in Node for referencing modules: https://nodejs.org/docs/v12.14.0/api/modules.html

I enabled this when setting up the project by:

1. Adding **esm** as a development module.
    ```
    $ npm install --save-dev esm
    ```

2. Adding 'esm' to the name of the Gulpfile, so `gulpfile.js` became `gulpfile.esm.js`.

### gulp-connect-php

Integrates gulp with a local PHP server.

NPM Package: https://www.npmjs.com/package/gulp-connect-php
Repo: https://github.com/micahblu/gulp-connect-php

### Browsersync

Browsersync is a tool built on Node.js which can perform automatic browser reloading (as well as many other features) during development.

https://www.browsersync.io/docs

When Browsersync is running it also serves up an UI/admin application at: http://localhost:3001

API: https://www.browsersync.io/docs/api
Options: https://www.browsersync.io/docs/options