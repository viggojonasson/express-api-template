const fs = require('fs');
const path = require('path');

/**
 * Get the routes.
 * @param {} callback
 */
function getRoutes(callback) {
    fs.readdir(path.join(__dirname, '/../routes'), function (err, routes) {
        if (err) {
            return callback(err);
        }

        return callback(null, routes);
    });
}

module.exports = getRoutes;
