# filename-ends-with

> Check if filename ends with specific string.

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

### Liccense
[MIT](https://github.com/frenchbread/filename-ends-with/blob/master/LICENSE)
