const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '/../.env') });

const getRoutes = require('./utils/getRoutes');
const server = require('./server');

setupRoutes();

function setupRoutes() {
    getRoutes(function (err, routes) {
        if (err) {
            // TODO: Add error handling + retries.
            throw err;
        }

        // Check if we have a "unknown" file.
        const unkownIndex = routes.indexOf('unknown.js');

        // If we have a "unknown" file then remove it and put it to the back of the array.
        // This is because if we do wildcard routes / endpoints at the start it will overwrite every other route / endpoint.
        if (unkownIndex > 0) {
            routes.splice(unkownIndex, 1);

            routes.push('unknown.js');
        }

        routes.forEach(function (i) {
            i = i.replace('.js', '');
            if (i === 'unknown') {
                server.use('*', require(`./routes/${i}`));
            } else {
                server.use(
                    `/${i === 'index' ? '' : i}`,
                    require(`./routes/${i}`)
                );
            }
        });

        console.log('Routes setup, ' + routes.length + ' routes!');
    });
}
