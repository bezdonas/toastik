# DISCLAIMER
___The library is under development. This note will disappear, when it will be usable. Description below is desirable goal. Check out [roadmap](https://github.com/bezdonas/toastik/wiki/Roadmap)___


# toastik
Simple but powerful dependancies-free [bootstrapy-looking](http://getbootstrap.com/components/#alerts) javascript toast notifications library.  
Inspired by [toastr](https://github.com/CodeSeven/toastr) with no desire to use jQuery.  
No css-files are required.

Developed with ES6 compiled by [babel](https://babeljs.io) using [webpack](https://webpack.github.io/)

## Demo
[bezdonas.github.io/toastik](bezdonas.github.io/toastik)

## Setup

toastik can be installed as an [npm package](https://www.npmjs.com/package/toastik):
```shell
npm install --save toastik
```
```javascript
// import toastik after installing it as an npm-package using ES6 modules
import toastik from 'toastik';

// ...or as AMD module
var toastik = require('toastik');
```
...or as [bower package](https://link.to.bower.package):
```shell
bower install toastik
```
```html
<script src="link.to.cdn/toastik.min.js"></script>
```
You can also serve toastik from CDN([Link](https://link.to.cdn)), or [download](https://link.to.direct.download) and host locally.

## Basic usage

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
toastik.success('Blink!', { delay: 100, corner: [ 'bottom', 'left' ] });

// Hide all toasts
toastik.clear();
```

## Customize

### Intro
As stated above, you can pass custom options into specific toast:
```javascript
// Calls success toast with really short delay
toastik.success('Blink!', { delay: 100 });
```
Reconfiguration of defaults is also possible:
```javascript
// Configure all success toasts to have the closer button
toastik.configure('success', { showCloser: true });

// Or reconfigure all types of toasts to show up at bottom-right corner
toastik.configure({ corner: [ 'bottom', 'right' ] });
```

### Positioning
corner

### Styling
json-formatted toast styling or provide class, or override default template

### Delays
delay, hoverDelay, statusBar

### Buttons
closer-icon, action-button

...
