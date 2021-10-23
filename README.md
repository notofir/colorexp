# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
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
docker run --rm --name ce -e CHOKIDAR_USEPOLLING=true -p 8080:8080 -v $PWD:/app colorexp bash
docker run --rm --name ce -e CHOKIDAR_USEPOLLING=true -p 8080:8080 -v %cd%:/app colorexp bash
```

First run from docker:
```
vue create colorexp
```