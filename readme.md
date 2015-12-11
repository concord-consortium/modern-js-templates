# Template for Javascript project
## Using Gulp and Browserify

### Install Deps
  * [Node.js](http://nodejs.org): `brew install node` on OS X
    * Note, you MUST have Node > 4.1.1. Possible help for upgrading:
       $ brew update
       $ brew upgrade node
       $ sudo chown -R $(whoami) /usr/local/include
       $ brew link --overwrite node
  * [Webpack](https://webpack.github.io): `npm install webpack -g`
  * [live-server](https://www.npmjs.com/package/live-server) `npm install -g live-server`
  * npm modules needed for gulp plugins &etc. : `npm install`.

### Run
  * `webpack --watch` — watches the project sources in `./src/` and builds artifacts into `public`.

### Notes

  * `app.js` is the main entry point for the app. Require other files with
    `require("relative/path/to/file");`
  * Style sheets must be `required` by source code
  * If you want other asset management, use gulp
