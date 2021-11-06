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

// Assign randomized participant id: https://www.qualtrics.com/support/survey-platform/common-use-cases-rc/assigning-randomized-ids-to-respondents/

```js
var qthis = this;
// Hide qualtrics next button.
qthis.hideNextButton();

// Copy //dist/js/app.<stamp>.js here. Then, look for `PLACEHOLDER FOR QUALTRICS` and appending found string the following line:
// `; qthis.showNextButton();`
// OR `; qthis.clickNextButton();`
```