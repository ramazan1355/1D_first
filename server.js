const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Логика переключения щита
app.post('/api/toggle-shield', (req, res) => {
    const { status } = req.body;
    console.log(`[1D System] Статус защиты изменен: ${status ? 'ВКЛ' : 'ВЫКЛ'}`);
    
    // Здесь имитация запуска твоего C++ ядра
    if (status) {
        // Имитация: запуск процесса генерации энтропии
    }

    res.json({ 
        success: true, 
        message: status ? "Защита запущена" : "Защита остановлена" 
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`
    ======================================
    1D BACKEND CORE IS ACTIVE
    URL: http://localhost:${PORT}
    ======================================
    `);
});
