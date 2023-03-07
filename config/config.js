require('dotenv').config()
module.exports = {
    development: {
        database: 'stockwise_development',
        dialect: 'postgres',
    },
    test: {
        database: 'stockwise_test',
        dialect: 'postgres',
    },
    production: {
        use_env_variable: 'stockwise_production',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false,
                require: true,
            },
        },
    },
}
