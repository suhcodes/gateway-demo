<div align="center">
    <img width=150 height=150 src="./public/logo.png" title="demo" />
    <h1 style="margin-top: 0px">Demo
    </h1>
</div>

The API Gateway meant to be consumed by Vue 3 Webapp Demo.

<br><br>

## Getting Started


**Prerequisites**
* NodeJS `16.13.2`
* NPM `8.3.1`
<br>

**Project Structure**
1. File structure:

New modules are added directly to the './src' folder, the scope of modules are divided by:

* `get.js` GET requests and methods that get/read data.
* `post.js` POST requests and methods that add/creates data.
* `put.js` PUT requests and methods that change existing data.
* `delete.js` DELETE requests and methods that removes data.
* `index.js` gathers all methods

```
movies_finder_gateway
└─── build
│   │   webpack.base.js
│   │   webpack.dev.js
│   │   webpack.prod.js
│
└─── lib
│   │   movies_finder_gateway.js
│   │   movies_finder_gateway.min.js
│   │   index.html
│   │   index.js
│   
└─── test / unit
│   │   auth
│   │   │   delete.test.js
│   │   │   index.test.js
│   │   │   get.test.js
│   │   │   post.test.js
│   │   │   put.test.js
│   │   index.test.js
│ 
│   .babelrc
│   .editorconfig
│   .eslintignore
│   .eslintrc
│   .gitignore
│   .jsdoc.json
│   .npmignore
│   index.html
│   package-lock.json
│   package.json
│   readme.md
│   serverCovarage.js
│   serverDocs.md
│   test-results.xml
```

2. Module Structure:

Whenever creating a new module add it to the category that fits it best according to what is its goal and how does it serve to the consuming webapp. After choosing if its either a `post`, `get`, `delete` or `put` add the documentation points to it:

```js
/**
 * @memberof scopeName
 * @module moduleName
 * @function
 * @returns {Promise} Module Name
 */
```

Functions will always be exported and should be written as:

```js
export function moduleName (args) {
  return this.request.post(`${this.url}/path`, args)
    .then((res) => res)
    .catch((err) => throw err)
}
```

3. Package Structure:

The generated packages are added to the `./lib` folder.

* `index.js` should always export the minified version of the library (`movies_finder_gateway.min.js`)

  > If `index.js` is deleted, it is required to manually create it again.

* All other files are automatically generated from the command npm run build:all

4. Unit Test Structure:
The `./test/unit` folder should mirror the `./src`, for each file at the source of the project should be one at the testing scope.
If the `./src` file is named `index.js`, then the test should be `index.test.js`

* use npm run test to run the tests
* use npm run test:watch to keep the test server up while you make changes and it will give a feedback as files are saved
* use npm run test:coverage to get the tests metrics

5. Using the library:

Import it as a dependency in the `package.json` file, to reference it as its a private repository use:

* Local file reference:

```json
{
  ...
  "movies-finder-gateway": "file:../gateway-demo",
  ...
}
```

* Git repo reference:

```json
{
  ...
  "movies-finder-gateway": "git@github.com:suhcodes/gateway-demo.git#v1.0.0",
  ...
}
```
