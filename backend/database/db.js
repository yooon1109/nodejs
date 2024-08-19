const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'my_db'
});

//데이터베이스 연결함수
async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('MariaDB에 연결되었습니다.');
        return connection;
    } catch (err) {
        console.error('MariaDB 연결 오류:', err);
        throw err;
    }
}

module.exports = { getConnection };