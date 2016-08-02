# filename-ends-with

> Check if filename ends with specific string.

[![NPM](https://nodei.co/npm/filename-ends-with.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/filename-ends-with/)

### Installation

```
$ npm install filename-ends-with --save
```

### Usage

```js

import fEndsWith from 'filename-ends-with';

fEndsWith('somefilename.jpg', '.jpg');
// => true

fEndsWith('somefilename.jpeg', '.jpg');
// => false

fEndsWith('somefilename.txt', ['.md', '.json', '.txt']);
// => true

```

### Tests

```
$ npm test
```

### License
[MIT](https://github.com/frenchbread/filename-ends-with/blob/master/LICENSE)
