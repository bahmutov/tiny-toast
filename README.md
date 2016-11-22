# tiny-toast
> Tiny library for JavaScript only message popups

[![NPM][tiny-toast-icon] ][tiny-toast-url]

[![Build status][tiny-toast-ci-image] ][tiny-toast-ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![manpm](https://img.shields.io/badge/manpm-%E2%9C%93-3399ff.svg)](https://github.com/bahmutov/manpm)

[demo](http://glebbahmutov.com/tiny-toast/)

![tiny toast screenshot](tiny-toast.png)

## Install and use

`npm install tiny-toast`

Include `dist/tiny-toast.js` script

```html
<script src="tiny-toast.js"></script>
<script>
tinyToast.show('Hello from tiny toast')
// timeout (ms) is optional
tinyToast.hide(2000)
// hide can be fluent
tinyToast.show('Hi').hide(1000)
</script>
```

You can also use this library via [RawGit CDN](https://rawgit.com/) by grabbing the
CDN path to the `https://github.com/bahmutov/tiny-toast/blob/master/dist/tiny-toast.js` or
specific tag.

## Custom style

You can adjust the element's CSS style by providing your own rules. Just
mark them "important".

```
<style>
.tinyToast {
  background-color: #6f3 !important;
  border-radius: 3px !important;
}
</style>
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/tiny-toast/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[tiny-toast-icon]: https://nodei.co/npm/tiny-toast.png?downloads=true
[tiny-toast-url]: https://npmjs.org/package/tiny-toast
[tiny-toast-ci-image]: https://travis-ci.org/bahmutov/tiny-toast.png?branch=master
[tiny-toast-ci-url]: https://travis-ci.org/bahmutov/tiny-toast
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
