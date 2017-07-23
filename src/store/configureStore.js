/**
 * Author: gaopeng
 * Date：  2017/7/7
 * Time:   20:34
 */
console.log(process.env.NODE_ENV )
if (process.env.NODE_ENV !== 'development') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}