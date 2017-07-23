/**
 * Created by zhoutk on 17/7/23.
 */

const PLATFORM = process.env.PLATFORM_ENV;

if (PLATFORM === 'app') {
    module.exports = require('./index.app');
} else {
    module.exports = require('./index.web');
}
