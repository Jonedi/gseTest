module.exports = {
    db: {
        client: process.env.DBSQL,
        connection: {
            host:       process.env.HOST,
            user:       process.env.USER,
            password:   process.env.PASSWORD,
            database:   process.env.DATABASE
        },
        adapter: 'pinia-orm-mysql',
        
        client: process.env.DBNOSQL,
        connection: {
            url: process.env.URL
        },
        adapter: 'pinia-orm-mongodb'
    }
}