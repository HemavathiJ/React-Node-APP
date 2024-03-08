module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "node_mysql_crud_db",
    dialect: "mysql", // used to generate SQL queries
    pool: {
        max: 5,
        min: 0,
        // connection can be idle before being released.
        idle: 1000,
        // max time in ms, that pool will try to get the connection before throwing error.
        acquire: 30000
    }
}