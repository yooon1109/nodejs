//userDb.js
const db = require('../database/db');

exports.signUp = async (data) => {
    let connection;
    try {
        connection = await db.getConnection();
        const result = await connection.query(`INSERT INTO user (userId, userPw) VALUES (?,?)`, [data[0], data[1]]);
        return result;
    } catch (err) {
        console.error('사용자 등록 오류:', err);
        throw err;
    } finally {
        if (connection) connection.release();//연결 해제
    }
};

exports.getUser = async (userID) => {
    let connection;
    try {
        connection = await db.getConnection();
        const result = await connection.query(`SELECT * FROM user WHERE userId = ?`, [userID]);
        return result;
    } catch (err) {
        console.error('사용자 조회 오류:', err);
        throw err;
    } finally {
        if (connection) connection.release();
    }
}