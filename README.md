# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lint
```
yarn lint
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Setup
```bash
docker build . -t colorexp
docker run -it --rm --name ce -p 8080:8080 -v $PWD:/app colorexp bash
```

First run from docker:
```
vue create colorexp
```

# Qualtrics

Doesn't accept `...` code (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) nor `require`. Validator that seems to catch these errors: https://esprima.org/demo/validate.html
JS Formatter: https://beautifytools.com/javascript-validator.php

Execute:

```bash
yarn build
sed "s/console.log(\"IS DONE PLACEHOLDER FOR QUALTRICS\")/qthis.showNextButton()/" dist/js/app.*.js > dist/js/app.js
sed "s/\"CONDITION PLACEHOLDER FOR QUALTRICS\"/true/" dist/js/app.js > dist/js/app_experimental.js
sed "s/\"CONDITION PLACEHOLDER FOR QUALTRICS\"/false/" dist/js/app.js > dist/js/app_control.js
```

Assign randomized participant id: https://www.qualtrics.com/support/survey-platform/common-use-cases-rc/assigning-randomized-ids-to-respondents/
Qualtrics API https://api.qualtrics.com/instructions/ZG9jOjIwMTY2NzUy-javascript-question-api

Fixes:
- https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread

```js
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
    var qthis = this;
	qthis.hideNextButton();
	document.body.innerHTML += "<div id=\"app\"></div>";
    /*** Put app.js here. ***/
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
```