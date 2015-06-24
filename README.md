# promise-call

Install
-----

```
npm i promise-call
```

Usage
-----

```
var pcall = require('promise-call');
pcall(fs.readfile, filename)
  .then(function(content) {

  })
  .catch(function(error) {

  });
```
