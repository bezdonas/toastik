# DISCLAIMER
___The library is under development. This note will disappear, when it will be usable. Description below is desirable goal. Check out [roadmap](https://github.com/bezdonas/toastik/wiki/Roadmap)___


# toastik
Simple dependancies-free [bootstrapy-looking](http://getbootstrap.com/components/#alerts) javascript toast notifications library.  
Inspired by [toastr](https://github.com/CodeSeven/toastr) with no desire to use jQuery or any other framework.  
No css-files are required.

Developed with ES6 compiled by [babel](https://babeljs.io) using [webpack](https://webpack.github.io/)

## Demo
[bezdonas.github.io/toastik](bezdonas.github.io/toastik)

## Installation

toastik can be installed as an [npm package](https://www.npmjs.com/package/toastik):
```
npm install --save toastik
```
...or as [bower package](https://link.to.bower.package):
```
bower install toastik
```
Want something simple and old-style? Serve it from CDN, or [download](https://link.to.direct.download) and host locally:
```
<script src="link.to.cdn/toastik.min.js"></script>
```

## Basic usage

### Setup
```javascript
// import toastik after installing it as an npm-package using ES6 modules
import toastik from 'toastik';

// ...or as AMD module
var toastik = require('toastik');
```
If you served it from CDN or as bower package, then you'll just get your `toastik` as global variable.   

### Usage examples
```javascript
// Success toast with no title
toastik.success('Hello world!');

// Warning toast
toastik.warning('Your toast has burned :(');

// Error toast with title
toastik.error('I am an error message', 'Achtung!');

// Info toast with title and custom options
toastik.info('I am going to stay here for some long time', 'Hey!', { delay: 100500 });

// toastik will also get it, if you'll pass options as second argument, without title
toastik.success('Blink!', { delay: 1000, corner: [ 'bottom', 'left' ] });
```

## API
API docs here
