//server.js
//모듈 불러오기
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3001;
app.use(express.json());//클라이언트가 JSON데이터를 서버로 전송하면 데이터를 자동으로 파싱하여 req.body에 저장
app.use(cors({
    origin: '*',
    credentials:true,
}));

app.post('/api/userData',(req,res) => {
    console.log(req.body);
    res.json('Data received');
});

app.use('/api', userRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

