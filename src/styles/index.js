/**
 * Created by zhoutk on 17/7/23.
 */

const PLATFORM = process.env.NODE_ENV;
if (PLATFORM === 'web') {
    module.exports = require('./index.web');
} else {
    module.exports = require('./index.app');
}
