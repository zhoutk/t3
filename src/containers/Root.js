/**
 * Author: gaopeng
 * Date：  2017/7/9
 * Time:   9:18
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod');
} else {
  module.exports = require('./Root.dev');
}