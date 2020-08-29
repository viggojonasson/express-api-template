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

        routes.forEach(function (i) {
            i = i.replace('.js', '');
            server.use(`/${i === 'index' ? '' : i}`, require(`./routes/${i}`));
        });

        console.log('Routes setup, ' + routes.length + ' routes!');
    });
}
