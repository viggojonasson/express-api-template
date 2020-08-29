# express-api-template

Express API template easy to use easy to setup.

## Setup

-   Start by cloning the repo: `git clone https://github.com/viggojonasson/express-api-template.git`
-   Then cd into the repo: `cd express-api-template`
-   Install all required NPM modules: `npm i`
-   After that start it by typing: `npm run start` or if you wish to start with nodemon then do `npm run dev`. Nodemon will make it easier for you to code by restarting the application when file changes are detected.

## Adding additional routes

In order to add additional routes you just have to create a new file in the `routes` folder after that paste this template in it:
Files named index.js are set to route to `/`.

```js
const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    res.json({ success: true, message: 'Hello World!' });
});

module.exports = router;
```

## Wildcard Endpoints

All requests that are not recognizable are sent to the "unkown.js" file if one.
