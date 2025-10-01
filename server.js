const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'interface.html'));
});

// Khởi chạy server và lắng nghe ở một cổng cụ thể
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
    console.log('Bạn có thể truy cập trang web CV của mình tại địa chỉ này.');
});