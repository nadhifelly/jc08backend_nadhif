const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'nadhif',
    password: 'andini2205',
    host: 'db4free.net',
    database: 'nadhifelly',
    port: '3306'
})

module.exports = conn