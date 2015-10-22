# Template for Javascript project
## Using Gulp and Browserify

### Install Deps
  * [Node.js](http://nodejs.org): `brew install node` on OS X
  * [Gulp](http://gulpjs.com/): `npm install -g gulp`
  * [live-server](https://www.npmjs.com/package/live-server) `npm install -g live-server`
  * npm modules needed for gulp plugins &etc. : `npm install`.

### Run
  * `gulp default` — watches the project sources in `./src/` and builds artifacts into `public`.
  * `cd public && live-server`– starts a live webserver on localhost:8080 with autorefreshing.

### Notes

  * `app.js` is the main entry point for the app. Require other files with
    `require("relative/path/to/file");`
  * All files placed in `assets` will be copied as-is to `public`
