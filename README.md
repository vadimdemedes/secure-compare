# secure-compare

Constant-time comparison algorithm to prevent timing attacks for Node.js.
Copied from [cryptiles](https://github.com/hapijs/cryptiles) by [C J Silverio](https://github.com/ceejbot).

*If you're targeting Node.js v6.6.0+, use [crypto.timingSafeEqual](https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b) instead.*


### Installation

```
$ npm install secure-compare --save
```


### Usage

```javascript
var compare = require('secure-compare');

compare('hello world', 'hello world').should.equal(true);
compare('你好世界', '你好世界').should.equal(true);

compare('hello', 'not hello').should.equal(false);
```


### Tests

```
$ npm test
```


### License

secure-compare is released under the MIT license.
