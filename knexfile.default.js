// ------------------------------------------------------------------------------
// knexfile.default.js
//
// Default configuration database connection and migrations by environment.
// Override with local knexfile.js
// ------------------------------------------------------------------------------

module.exports = {

    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'practice',
            user: 'postgres'
        },
        migrations: {
            directory: __dirname + '/server/db/migrations'
        }
    },

    test: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'practice_test',
            user: 'postgres'
        },
        migrations: {
            directory: __dirname + '/server/db/migrations'
        }
    }

};

// ------------------------------------------------------------------------------