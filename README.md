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

Doesn't accept `...` code.

Execute:

```bash
yarn build
./node_modules/.bin/babel --plugins @babel/plugin-proposal-object-rest-spread dist/js/app.*.js -o app.js
```

Look for `PLACEHOLDER FOR QUALTRICS` in app.js and appending found string the following line:

// Assign randomized participant id: https://www.qualtrics.com/support/survey-platform/common-use-cases-rc/assigning-randomized-ids-to-respondents/

```js
Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/
	this.questionContainer.innerHTML = "<div id=\"app\"></div>";
    var qthis = this;
    // Hide qualtrics next button.
    qthis.hideNextButton();

    // Copy app.js here.
    // `; qthis.showNextButton();`
    // OR `; qthis.clickNextButton();`
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
```