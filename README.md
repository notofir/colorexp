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

    // Open http://localhost:8080/js/app.js and copy contents here (copying the source code directly in qualtrics may fail on formatting errors). Then, look for `PLACEHOLDER FOR QUALTRICS` and appending found string the following line:
    // `; qthis.showNextButton();`
    // OR `; qthis.clickNextButton();`
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});
```